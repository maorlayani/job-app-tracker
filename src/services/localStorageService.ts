
const STORAGE_KEY = 'companyData'

export function saveComanyData(data: {}) {
    const currData: {}[] = _getCompanyData()
    currData.push(data)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currData))
}

function _getCompanyData() {
    let data = localStorage.getItem(STORAGE_KEY)
    if (data !== null) {
        const companyData: {}[] = JSON.parse(data)
        return companyData
    } else return []
}

export function saveToLocalStorge(entityType: string, entities: any[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}