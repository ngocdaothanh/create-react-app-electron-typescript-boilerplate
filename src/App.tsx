import React from 'react'
import {IpcRenderer} from 'electron'

// @ts-ignore
const ipcRenderer: IpcRenderer = window.electron.ipcRenderer

const App = () => {
  const whereami = ipcRenderer.sendSync('whereami')

  return (
    <>
      <h1>Welcome to React on Electron</h1>
      <pre><code>whereami: {JSON.stringify(whereami, null, 2)}</code></pre>
    </>
  )
}

export default App
