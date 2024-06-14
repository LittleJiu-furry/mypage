export const getCookies = () => {
    return document.cookie.split(';').map(cookie => {
        const [name, value] = cookie.split('=')
        return { name: name?.trim(), value: value?.trim() }
    })
}

export const getCookie = (name) => {
    return getCookies().find(cookie => cookie.name === name)?.value
}