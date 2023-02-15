import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

function makeId(length: number = 4): string {
    let txt: string = ''
    const possible: string = '0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

const getTimeFromNow = (date: number) => {
    return dayjs(date).fromNow()
}

const checkIsPlural = (num: number, noun: string) => {
    if (num <= 1) return `${num} ${noun}`
    return `${num} ${noun}s`
}

export const utilService = {
    makeId,
    getTimeFromNow,
    checkIsPlural
}