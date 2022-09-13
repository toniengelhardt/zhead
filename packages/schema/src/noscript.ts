import type { UnsafeKeys } from './types'

export interface Noscript {
  /**
   * @internal This property is used to dedupe the link tags
   */
  key: string
  /**
   * @internal Content of the script tag
   */
  children: string
}

export type NoscriptEntries = Partial<Noscript & UnsafeKeys>[]
