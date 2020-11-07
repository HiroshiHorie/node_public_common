//
//
//

export type Document = { [index: string]: any }

export interface FacebookUser {
  id: string
  email: string
  name: string
  last_name: string
  first_name: string
  gender: string
  birthday: string
  picture: {
    data: {
      height: number
      width: number
      is_silhouette: boolean
      url: string
    }
  }
}
