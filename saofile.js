const { relative } = require("path");
const validate = require("validate-npm-package-name");

module.exports = {
  prompts: require("./prompts"),
  actions() {
    const validation = validate(`${this.answers.pkgname}`);
    validation.warnings &&
      validation.warnings.forEach((warn) => {
        console.warn("Warning:", warn);
      });
    validation.errors &&
      validation.errors.forEach((err) => {
        console.error("Error:", err);
      });
    validation.errors && validation.errors.length && process.exit(1);

    const actions = [
      {
        type: "add",
        files: "**",
        templateDir: "template/base",
      },
      {
        type: "move",
        patterns: {
          gitignore: ".gitignore",
          env: ".env",
          // If we use `package.json` directly
          // Then `template` folder will be treated as a package too, which isn't safe
          "_package.json": "package.json",
        },
      },
    ];

    actions.push({
      type: "add",
      files: "**",
      templateDir: `template/frameworks/${this.answers.server}`,
    });
    // user wants docker based deployments
    if (this.answers.deploy !== "none") {
      actions.push({
        type: "add",
        files: "**",
        templateDir: `template/features/${this.answers.deploy}`,
      });
    }
    // user does not want docker-based deployment but wants database
    if (this.answers.deploy === "none" && this.answers.db !== "none") {
      actions.push({
        type: "add",
        files: "**",
        templateDir: `template/features/db/${this.answers.db}`,
      });
    }

    const updatePkg = (answers, data) => {
      if (answers.db === "mysql") {
        data.dependencies["mysql2"] = "^2.1.0";
      }

      if (answers.db === "postgres") {
        data.dependencies["pg"] = "^8.2.1";
        data.dependencies["pg-hstore"] = "^2.3.3";
      }

      if (answers.orm === "sequelize") {
        data.devDependencies["sequelize-cli"] = "^5.5.1";
        data.dependencies["sequelize"] = "^6.3.0";
      }

      if (answers.orm === "typeorm") {
        data.dependencies["typeorm"] = "^0.2.25";
      }

      return data;
    };
    if (this.answers.db !== "none") {
      actions.push({
        type: "modify",
        files: "package.json",
        handler: (data) => updatePkg(this.answers, data),
      });

      if (this.answers.orm !== "none") {
        actions.push({
          type: "add",
          files: "**",
          templateDir: `template/features/orm/${this.answers.orm}`,
        });
      }
    }

    return actions;
  },
  async completed() {
    this.gitInit();

    await this.npmInstall({ npmClient: "npm" });

    const chalk = this.chalk;
    const isNewFolder = this.outDir !== process.cwd();
    const relativeOutFolder = relative(process.cwd(), this.outDir);
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : "";

    console.log(
      chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.pkgname}}\n`
    );

    console.log(chalk`  {bold To get started:}\n`);
    console.log(chalk`${cdMsg}\t{cyan npm run dev}\n`);

    console.log(chalk`  {bold To build & start for production:}\n`);
    console.log(chalk`${cdMsg}\t{cyan npm run build}`);
    console.log(chalk`\t{cyan npm run start}\n`);

    console.log(chalk`  {bold To test:}\n`);
    console.log(chalk`${cdMsg}\t{cyan npm run test}\n`);
  },
};
