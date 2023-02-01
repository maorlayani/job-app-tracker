export const utilService = {
    makeId
}

function makeId(length: number = 4): string {
    let txt: string = ''
    const possible: string = '0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}