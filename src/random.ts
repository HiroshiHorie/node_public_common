//
//
//

import { v4 as uuidv4 } from 'uuid';

const crypto = require('crypto');

export class Random {

  static NumericSet: string = "0123456789"
  static AlphaSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  static AlphaNumericSet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  static string(length: number = 32, string: string = this.AlphaNumericSet) {
    let result = ""
    for (let i = 0; i < length; i++) result += string.charAt(Math.floor(Math.random() * string.length))
    return result
  }
}

export const UUIDWithPrefix = (prefix: string) => prefix + uuidv4()

export const IDHash = (userIds: string[]) => {
  userIds.sort()
  return crypto.createHash('md5').update(userIds.join('-')).digest("hex");
}
