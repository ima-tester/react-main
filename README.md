# Agilestacks React Application Template

## Application Source
This application was generated from **Agilestacks React Web Application Template**.

## Application Features
From the scratch the application supports the following features
* [Babel](https://babeljs.io/) v6.26
* [Webpack](https://webpack.js.org/) v3.12
* [React](https://reactjs.org/) v16.2
* [React router](https://github.com/ReactTraining/react-router) v4.3
* [Blueprintjs](http://blueprintjs.com/docs/v2/) v2.3
* [ESLint](https://eslint.org/) v4.19
* [Sass Lint](https://github.com/sasstools/sass-lint/) v1.12
* [Jest](https://facebook.github.io/jest/) v23.1

## Environment

From the environment application supposes to obtain such a variable parameters
```bash
APPLICATION_REPOSITORY=github-organization-or-user/repository
APPLICATION_BRANCH=branch-name # default is `master`
```
These are in help for application to represent and manipulate own code source.


## Application Development
### Prepare
To init application development just run
```bash
npm install
```
This will install all application dependencies.

### Development Environment
By default in development environment application is served on `http://localhost:8081`. Port can be changed in configuration file for development environment `webpack.dev.js`.

Application has several commands that are useful for development cycle
```bash
npm start       # starts the development server
npm run lint    # makes code quality check
npm test        # runs tests over the application
```
When the server started it watches for changes are made to the code and refreshes the client each time it occurred.

## Application deployment
The application is to be distributed with a built source. There's a command to create a build
```bash
npm run build
```
It creates distribution set in `./dist/` folder.

There're another CI useful commands
```bash
npm run junit:lint      # makes code quality check and creates a junit report
npm run junit:test      # runs tests over the application and create a junit report
```

Here's an example of deployment cycle
```bash
export APPLICATION_REPOSITORY=github-organization-or-user/repository
# export APPLICATION_BRANCH=custom-branch

npm install
npm run junit:lint && \
npm run junit:test && \
npm run build && \
aws s3 sync .dist s3://$DEPLOYMENT_BUCKET/
```

## Theming

Application can be preconfigured to be ran with different themes.

To change environment variable `APPLICATION_THEME` should be set to appropriate value. E.g.
```
APPLICATION_THEME=navy npm start
```
Application supports such themes
+ `khaki`
+ `olive`
+ `indy`
+ `navy`
+ `purple`
+ `pink`
+ `ruby`
