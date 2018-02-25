# PhoneGap application template

## Features

* PhoneGap, configured for Android
* Scripts for building, signing, etc.
* Webpack
* React, ES6+, SASS, etc. (uses `site-template-webpack`)
* Material UI framework

## Scripts

* `build.sh` - Build APK for testing
* `build-release.sh` - Build APK for release
* `sign.sh` - Sign release APK (need to add a keystore first)

## Getting started

* Edit `config.xml`, specifically:
  * widget `android-versionCode`, `id` and `version`
  * name
  * description
  * author
* `cordova platform add android` (add the Android platform)
* `npm install` (install dependencies)
* `npm run build` (generate inital application files)

# Test on device

* `npm run watch` (in one terminal; watches files and rebuilds on change)
* `npm run serve` (in another terminal; serves files to the app)
* Test on device using PhoneGap app

# Run web app in browser

* `npm run dev` (runs webpack dev server with hot-loading)
* Visit `http://0.0.0.0:8080/`

## Things to do later

* Generate a keystore (you can build unsigned debug APKs for testing in the
  meantime)
* Generate icons at different densities
