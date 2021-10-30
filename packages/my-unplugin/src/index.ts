/*
 * @Descripttion:
 * @Author: xiangjun
 * @Date: 2021-09-09 13:23:16
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-10-30 15:40:45
 */
import { createUnplugin } from 'unplugin'
import { Options } from './types'

export default createUnplugin<Options>((options: any) => ({
  name: 'unplugin-starter',
  transformInclude(id) {
    // eslint-disable-next-line no-console
    // console.log('id: ', id)
    return id.endsWith('main.ts') || id.endsWith('.ts') || id.endsWith('.js') || id.endsWith('.vue')
  },
  transform(code) {
    // eslint-disable-next-line no-console
    // console.log(code)
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`).replace('{@author}', 'xiangjun9988')
  },
}))
