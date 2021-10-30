import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import MyUnplugin from '../src/vite'

export default defineConfig({
  plugins: [Inspect(), MyUnplugin()],
})
