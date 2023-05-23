# Art-Con-Room

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> Generate a new Node.js based API project 

## Features

- [Ava](https://ava.li) for testing 🧪
- [TypeScript](https://typescript.nuxtjs.org/) baked in 🙌
- Backend Framework of your choice
  - [Express](http://expressjs.com/) (✅)
  - [Koa](https://koajs.com/) (✅)
  - [Hapi](https://hapi.dev/) (✅)
  - [Fastify](https://www.fastify.io/) (✅)
- [ORM Support]()
  - [TypeORM](https://typeorm.io/) (✅)
  - [Sequelize](https://sequelize.org/) (✅)
- Deploy your apps 🏗
  - [Docker 🐳](https://www.docker.com/) (✅)
  - [DIY 🤓]() (✅)
- DB of your own choice ⌗
  - [Postgres 🐘](https://www.postgresql.org/) (✅)
  - [MySQL 🐬](https://www.mysql.com/) (✅)

## Usage
> _Generate a [Personal Access Token](https://github.com/settings/tokens/new) with `read:packages` scope_

``` bash

# install dependencies, this step will only work if you're logged in
$ npx art-con-room backend-service

# serve with hot reload at localhost:3000
$ npm run start

# build for production
$ npm run build
```

## Test

```bash
# Will run all tests
$ npm run test
```

## Deployment

Deployment can be done using docker or do-it-yourself.

_Note_: **If you're using docker, update the `.env` file at the root of your repo before starting the containers**

```bash
# Will build & start your containers
$ docker-compose up --build -d
```

## Contributing

- Commits & PRs should now be allowed only if they follow a particular commit format, read more about it [here](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum)
- Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/compare)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->


<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!