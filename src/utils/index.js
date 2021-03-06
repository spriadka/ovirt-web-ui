// @flow
import { isNumber } from './unit-conversion'
import type { VmSessionsType } from '../ovirtapi/types'

export * from './permissions'
export * from './format'
export * from './round'
export * from './storage-conversion'
export { isNumber } from './unit-conversion'
export * from './array-utils'

export function flatMap<T, U> (array: Array<T>, mapper: (T) => Array<U>): Array<U> {
  return array.map(mapper)
    .reduce((accum, mapperResult) => [...accum, ...mapperResult], [])
}

export function parseGbToBytes (gbString: string): number | null {
  if (isNumber(gbString)) {
    const gbNumber = Number.parseInt(gbString, 10)
    return gbNumber * (1024 ** 3)
  }
  return null
}

export function doesVmSessionExistForUserId (sessions: Array<VmSessionsType>, userId: string): boolean {
  return sessions.find(s => s.user.id === userId) !== undefined
}
