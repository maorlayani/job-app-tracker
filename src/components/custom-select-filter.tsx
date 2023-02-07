import styled from "styled-components"


interface CustomSelectFilterProps {
    options: string[],
    label: string,
    onSetFilterBy: (ev: React.ChangeEvent<HTMLSelectElement>) => void
}

const StyledCustomSelectFilter = styled.div`
    display: flex;
    gap: .5em;
`

const StyledLabel = styled.label`
    margin-inline-start: .5em;
`

export const CustomSelectFilter: React.FC<CustomSelectFilterProps> = ({ options, label, onSetFilterBy }) => {
    return <StyledCustomSelectFilter>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
        <select name={label} id={label} onChange={onSetFilterBy}>
            <option value="">All</option>
            {options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
    </StyledCustomSelectFilter>
}