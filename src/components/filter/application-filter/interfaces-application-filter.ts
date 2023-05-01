export interface Options {
    location: string[],
    position: string[]
}

export interface FilterButtonListProps {
    isChecked: boolean,
    setIsChecked: (isChecked: boolean) => void,
    onResetFilter: () => void
}

export interface FilterTextSearchProps {
    searchInput: string,
    setSearchInput: (searchInput: string) => void
}

export interface FilterToggleButtonProps {
    isFilterOpen: boolean,
    setIsFilterOpen: (isFilterOpen: boolean) => void
}