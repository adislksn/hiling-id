Hiling.id
===
&nbsp;
Apk Preview 
---
<p align="center">
    <img width="200px" src="./src/assets/Screenshot_2022-10-22-23-16-35-519_hiling-id.jpg">
</p>

## Apk Link
- [Hiling.id =>](./hiling-id-8f2313797b89407982a60fb33ba3c82d-signed.apk)

## Repo Structure
```
/
├─ src/              # All assets, components, db, and screen. Also routes
│  ├─ assets/        # Dummy or images and video
│  ├─ components/    # All components are here
│  |   └─ index.js   # Routing every components 
│  ├─ database/      # Currently dummy data with JSON type
│  ├─ routes/        # Stack navigator keep here 
│  │   └─ index.js   # Work as third layer route and make it into component 
│  ├─ screen/        # Put all of layout or screen file
|  ├─index.js        # Second layer route to call from routes/index.js
│
├─ App.js            # Main js to be rendered, 
                       cause only CLI that appear index.js at root folder 
```

## Installation
Run the following command below in project terminal root to build android apk
```
yarn install
```
or
```
npm install
```
&nbsp;
Next is run the same function as git init inside expo
```
npx expo install expo-updates
```
&nbsp;
Build inside expo
```
expo build:android
```
or
```
npm install -g eas-cli
eas build -p android
```
&nbsp;
Then wait and follow the instruction if it the first build, generate a new key and choose apk.Last if expo need login in terminal input same as your expo.dev account
&nbsp;


## Dependencies
- ["expo-status-bar": "~1.4.0"](https://docs.expo.dev/versions/latest/sdk/status-bar/),
- ["react-native-safe-area-context": "4.3.1"](https://docs.expo.dev/versions/latest/sdk/safe-area-context/),
- ["react-native-screens": "~3.15.0"](https://docs.expo.dev/versions/latest/sdk/screens/),
- ["nativewind": "^2.0.11"](https://www.nativewind.dev/quick-starts/expo)
- ["@expo/vector-icons": "13.0.0"](https://icons.expo.fyi/)