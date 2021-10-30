import { createUnplugin } from 'unplugin'
import { Options } from './types'

export default createUnplugin<Options>((options: any) => ({
  name: 'unplugin-starter',
  transformInclude(id) {
    // eslint-disable-next-line no-console
    // console.log('id: ', id)
    return id.endsWith('main.ts') || id.endsWith('.ts') || id.endsWith('.js')
  },
  transform(code) {
    // eslint-disable-next-line no-console
    // console.log(code)
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`).replace('{@author}', 'xiangjun9988')
  },
}))
