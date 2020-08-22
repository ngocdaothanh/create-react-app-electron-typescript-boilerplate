import {app, BrowserWindow} from 'electron'
import isDev from 'electron-is-dev'
import path from 'path'

import {initLogic} from './logic'

const WIDTH = 900
const HEIGHT = 680

const DEV_URL = 'http://localhost:3000'
const PRD_URL = `file://${path.join(__dirname, '../build/index.html')}`

let mainWindow: null | BrowserWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: WIDTH,
    height: HEIGHT,

    webPreferences: {
      // Use `preload` instead of `nodeIntegration`:
      // https://www.electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content
      //
      // When we package the app for production, preload.js will be put in archive file app.asar,
      // but Electron will still be able to load it:
      // https://www.electronjs.org/docs/tutorial/application-packaging
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.on('closed', () => (mainWindow = null))

  mainWindow.setMenuBarVisibility(isDev)

  mainWindow.loadURL(isDev ? DEV_URL : PRD_URL)

  if (isDev) {
    // Open Dev Tools in a separate window for simplicity; this may also be useful:
    // https://stackoverflow.com/questions/53678438/dev-tools-size-and-position-in-electron
    mainWindow.webContents.openDevTools({mode: 'detach'})
  }

  initLogic()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
