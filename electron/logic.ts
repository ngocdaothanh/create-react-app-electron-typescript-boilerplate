import {ipcMain} from 'electron'

export function initLogic() {
  ipcMain.on('whereami', (event) => {
    event.returnValue = {__dirname, cwd: process.cwd()}
  })
}
