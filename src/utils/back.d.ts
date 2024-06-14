declare type accessToken = string
declare type refreshToken = string
declare type userInfo = {
    username: string
    email: string
    uid: string
    role: string
    isAdmin: boolean
}
declare type userLoginRequire = {
    username?: string
    uid?: string
    email?: string
    password: string
}

declare type loginResponse = {
    code: string
    msg: string
    refreshToken: refreshToken
}

declare type StatusResponse = {
    isLogin: boolean
    user: userInfo | null
}

export declare function getUserInfo(userToken: accessToken): userInfo | null
export declare function getAccessToken(refreshToken: refreshToken): accessToken | null
export declare function login(userLoginObject: userLoginRequire): loginResponse
export declare function getStatus(): StatusResponse