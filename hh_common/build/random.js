"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDHash = exports.UUIDWithPrefix = exports.Random = void 0;
//
const uuid_1 = require("uuid");
const crypto = require('crypto');
class Random {
    static string(length = 32, string = this.AlphaNumericSet) {
        let result = "";
        for (let i = 0; i < length; i++)
            result += string.charAt(Math.floor(Math.random() * string.length));
        return result;
    }
}
exports.Random = Random;
Random.NumericSet = "0123456789";
Random.AlphaSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
Random.AlphaNumericSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// export function logObject(obj: any) {
//     console.log(util.inspect(obj, {showHidden: false, depth: null}))
// }
exports.UUIDWithPrefix = (prefix) => prefix + uuid_1.v4();
exports.IDHash = (userIds) => {
    userIds.sort();
    return crypto.createHash('md5').update(userIds.join('-')).digest("hex");
};
