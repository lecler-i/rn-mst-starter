## React Native Mobx StarterKit
[![Build Status](https://travis-ci.org/lecler-i/rn-mst-starter.svg?branch=master)](https://travis-ci.org/lecler-i/rn-mst-starter)
[![codecov](https://codecov.io/gh/lecler-i/rn-mst-starter/branch/master/graph/badge.svg)](https://codecov.io/gh/lecler-i/rn-mst-starter)
[![React Native](https://img.shields.io/badge/react%20native-0.49.3-brightgreen.svg)](https://github.com/facebook/react-nati)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://github.com/futurice/pepperoni-app-kit/blob/master/LICENSE)

React Native Starter Kit based on [Pepperoni Starter Kit](http://getpepperoni.com)

## tltr;

Sounds good and you just want to see how it works? Here is a quick start guide:

```
git clone https://github.com/lecler-i/rn-mobx-starter-kit.git
cd pepperoni-app-kit
yarn install
yarn android / ios
```

## Contents

### Application Blueprint

* :heavy_check_mark: Always up-to-date [React Native](https://facebook.github.io/react-native/) scaffolding
* :heavy_check_mark: Modular and well-documented structure for application code
* :heavy_check_mark: Mobx / MST for safe and simple state managment
* :heavy_check_mark: `react-native-router-flux` for awesome navigation with 60fps transitions
* :o: Disk-persisted application state caching for offline support and snappy startup performance
* :o: Clean and testable service layer for interacting with RESTful APIs
* :o: JSON Web Token authentication
* :o: Built-in error handling and customizable error screens

### Testing Setup

* [Jest](https://facebook.github.io/jest/) for unit testing application code and providing coverage information.
* [Enzyme](https://github.com/airbnb/enzyme) and fully mocked React Native for unit testing UI components

### Development & Deployment Infrastructure

* [Travis CI](https://travis-ci.org/futurice/pepperoni-app-kit) example [configuration](https://github.com/futurice/pepperoni-app-kit/blob/master/.travis.yml) for Android, iOS and Javascript tests.
* :o: [Google Tag Manager](https://www.google.com/analytics/tag-manager/) analytics


### Roadmap

* **TODO** :star: [Microsoft Code Push](http://microsoft.github.io/code-push) for instant JavaScript and images update
* **TODO** Crash reporting
* **TODO** Android and iOS UI Testing with Calaba.sh?
* **TODO** Feature flags?

## Development workflow

After you have set up the project using above instructions, you can use your favorite IDE or text editor to write code, and run the application from the command line. Turn on React Native hot module reloading in the app developer menu to update your application as you code.

##### Start the application in iOS simulator
```
$ yarn ios:run
```

##### Start the application in Android simulator
(If using the stock emulator, the emulator must be running)
```
$ yarn android:run
```

##### Run unit tests
```
$ npm test
```

##### Run tests every time code changes
```
$ npm run test:watch
```

##### Generate code coverage report
```
$ npm run coverage
```

## Contributing

If you find any problems, please [open an issue](https://github.com/futurice/pepperoni-app-kit/issues/new) or submit a fix as a pull request.

We welcome new features, but for large changes let's discuss first to make sure the changes can be accepted and integrated smoothly.

## License

[MIT License](LICENSE)

## Credits

This project is forked from `pepperoni-app`, a React Native Boilerplate.
