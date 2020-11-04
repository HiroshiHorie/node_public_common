//
//

import { FacebookUser } from "./interfaces"
import axios from 'axios'
//
export class FacebookAPI {
  //
  private accessToken: string

  constructor(accessToken: string) {
    //
    this.accessToken = accessToken
  }

  public async getMe(fields: String = 'id,email,name,last_name,first_name,gender,birthday,picture.width(1024).height(1024)'): Promise<FacebookUser> {
    //
    // try {
    const response = await axios.get('https://graph.facebook.com/me', {
      params: {
        fields: fields,
        access_token: this.accessToken,
      },
    })

    return response.data

    // } catch (error) {
    //   console.log('meResponse error', error)
    // }
  }
}
