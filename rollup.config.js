// Bundle files in `electron` directory to one file `build/electron.js`

import typescript from '@rollup/plugin-typescript'

// Avoid the app to be reverse engineered
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'electron/main.ts',
  plugins: [
    typescript({
      tsconfig: 'tsconfig.electron.json'
    })
  ],
  output: [
    {
      file: 'build/electron.js',
      format: 'cjs',
      sourcemap: false,
      plugins: [terser()]
    }
  ]
}
