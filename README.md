# Architecture

Create Web App use Clean Architecture + React + Mobx.

# Docker

`docker-compose build` - use this command to build or rebuild image

`docker-compose up` - use this command to start app

`docker-compose down` - use this command to halt app

# Available Scripts

In the project directory, you can run:

### `npm install` - use this command to install all dependencies.

### `npm test` - use this command to execute tests.

- --updateSnapshot
  `Description:` Use this flag to re-record every snapshot that fails during this test run.
- --watch
  `Description:` Watch files for changes and rerun tests related to changed files.
- --coverage
  `Description:` Use this flag to receive code coverage stats.

### `npm start` - use this command to run dev server.

- env - one of `[dev, stage, prod, <custom env>]`.
  `Default:` `dev`.
  `Description:` Set the env type to load specific environment arguments `.env.${type}`
  #### `Example: npm start env=stage`
- url - string.
  `Default:` none.
  `Description:` Use this argument to set feature url.
  #### `Example: npm start url=http://feature-url.example.com`
- isDev - boolean.
  `Default:` true.
  `Description:` Use this argument to run project in DEVELOPMENT mode
  #### `Example: npm start isDev`

### `npm lint` - use this command to execute linter.

- --fix - boolean.
  `Default:` none.
  `Description:` Use this flag to fix all eslint issues.

### `npm build` - use this command to build application.

- isDev - boolean.
  `Default:` true.
  `Description:` Use this argument to build project in DEVELOPMENT mode
  #### `Example: npm start isDev`

> Note: You can use `yarn` instead of `npm`
