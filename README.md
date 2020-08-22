# Minimum Electron boilerplate for TypeScript, based on create-react-app

See also:
[create-react-app-electron-boilerplate](https://github.com/ngocdaothanh/create-react-app-electron-boilerplate)

## Directory structure

* `electron`: Directory for Electron (Node.js) source code
* `src`: Directory for React source code
* `build`: Directory for building the source code above
* `dist`: Directory for building production app
* `tsconfig.json`: TypeScript build config for React
* `tsconfig.electron.json`: TypeScript build config for Electron
* `rollup.config.js`: For [bundling](https://rollupjs.org) files in `electron`
  directory to one file [build/electron.js]

## Run the app in dev mode

```bash
npm start
```

## Build the app

Build the React app to `build` directory:

```bash
npm run react-build
```

Bundle files in `electron` directory to one file
[build/electron.js](https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3)
(`preload.js` will also be copied to `build` directory):

```bash
npm run electron-bundle
```

Package the Electron app:

```bash
npm run electron-pack
```

The packaged application will be in the `dist` directory.

See the documentation of [electron-builder](https://www.electron.build/) and
the `build` part of `package.json`.

## Include files in the production app

Put them in the `extraResources` directory.

The files can be found in the `resources/extraResources` directory
of the packaged application (`Contents/Resources/extraResources`
[for MacOS](https://www.electron.build/configuration/contents#extraresources)).

To access this folder in your app you can do:

```javascript
const isDev = window.require('electron-is-dev')
const pathAppResources = `${isDev ? '.' : window.process.resourcesPath}/extraResources/`
```
