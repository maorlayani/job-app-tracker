
const STORAGE_KEY = 'companyData'

export function saveComanyData(data: {}) {
    const currData: {}[] = _getCompanyData()
    // if (Array.isArray(currData)) {
    currData.push(data)
    // }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currData))
}

function _getCompanyData() {
    let data = localStorage.getItem(STORAGE_KEY)
    if (data !== null) {
        const companyData: {}[] = JSON.parse(data)
        // if (Array.isArray(data)) return data
        return companyData
    } else return []
}