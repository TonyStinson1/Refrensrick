# Rick and Morty Wiki

This project is a Rick and Morty Wiki. Made using [React Native](https://reactnative.dev/) to serve an infinite scrolling styled list of all the characters in the famous series [Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty). Uses the [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest) to display the details of each character including- name, gender, origin, location, amount of residents, chapters the character is featured in, etc.

## Screenshots

<details>
<summary>Show</summary>

![rnm_1](https://user-images.githubusercontent.com/39013115/190897912-789e7977-b0b5-4e2c-a3e4-bdcf71760655.jpg) ![rnm_2](https://user-images.githubusercontent.com/39013115/190897913-968e8689-646c-4fb5-97c1-fe465539c0b4.jpg) ![rnm_3](https://user-images.githubusercontent.com/39013115/190897914-11febe5a-1cf8-4eac-891b-36266c6baf3f.jpg) ![rnm_4](https://user-images.githubusercontent.com/39013115/190897915-7289621a-bba6-4c42-99eb-236d676281c5.jpg) ![rnm_5](https://user-images.githubusercontent.com/39013115/190897918-36d9ca53-1a16-491c-ad53-c15e94ea784e.jpg) ![rnm_6](https://user-images.githubusercontent.com/39013115/190897921-1ec93ad1-3c00-4872-b661-11e3d1c54e18.jpg)

</details>

## Prerequisites

- [Node.js > 14](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)

For more details and troubleshooting: [Setting up the development environment](https://reactnative.dev/docs/environment-setup)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.


## Setup environments

### Available Scripts

#### `npm start`

Runs the app in development mode.

To reset or clear the React Native packager's cache, you can pass the `--reset-cache` flag to the start script:

```cmd
npm start -- --reset-cache
```

or

```cmd
yarn start -- --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on the tests.

#### `yarn run ios`

Like `npm start`, but also attempts to open the app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open the app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assemble[Env][BuildType]`

Note: You have three options to execute the project
`assemble:` Generates an apk that you can share with others.
`install:` When you want to test a release build on a connected device.
`bundle:` When you are uploading the app to the Play Store.

For more info please go [here](https://reactnative.dev/docs/signed-apk-android).

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go [here](https://reactnative.dev/docs/publishing-to-app-store).
