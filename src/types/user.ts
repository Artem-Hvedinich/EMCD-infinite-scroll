export interface User {
    name: UserName
    email: string
    picture: UserPicture
}

interface UserName {
    title: string
    first: string
    last: string
}

interface UserPicture {
    large: string
    medium: string
    thumbnail: string
}
