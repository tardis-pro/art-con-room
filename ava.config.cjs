module.exports = {
  ignoredByWatcher: ["!**/*.{js,ts}"],
  files: ["./test/*.test.js", "!template"],
  snapshotDir: "./test/snapshot",
  require: ["@babel/register"],
  tap: false,
  verbose: true,
  color: true,
};
