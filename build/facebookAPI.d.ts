import { FacebookUser } from "./interfaces";
export declare class FacebookAPI {
    private accessToken;
    constructor(accessToken: string);
    getMe(fields?: String): Promise<FacebookUser>;
}
