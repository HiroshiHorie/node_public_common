"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookAPI = void 0;
const axios_1 = require("axios");
class FacebookAPI {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
    async getMe(fields = 'id,email,name,last_name,first_name,gender,birthday,picture.width(1024).height(1024)') {
        const response = await axios_1.default.get('https://graph.facebook.com/me', {
            params: {
                fields: fields,
                access_token: this.accessToken,
                locale: 'en_US',
            },
        });
        return response.data;
    }
}
exports.FacebookAPI = FacebookAPI;
