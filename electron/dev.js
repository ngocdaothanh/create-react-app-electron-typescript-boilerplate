// https://dev.to/michaeljota/electron-with-typescript-using-ts-node-8oi

require('ts-node').register({
  project: 'tsconfig.electron.json',
  compilerOptions: {
    // In `tsconfig.electron.json`, we use `"module": "esnext"` for building production app.
    // But in dev mode, we need to use "CommonJS".
    // Otherwise ts-node will generate `import '...'` code that Node.js can't understand.
    module: 'CommonJS'
  }
})

require('./main')
