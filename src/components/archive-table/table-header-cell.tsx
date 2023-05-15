import styled from "styled-components"
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
import { useState } from "react"
import { HeaderTitles } from "./table-header"

const StyledTableHeaderCell = styled.span`
    width: 20%;
    min-width: 128px;
    box-sizing: border-box;
    padding: 1em;
    font-weight: 600;
    color: #b1b1b1;
    display: flex;
    align-items: center;
`
const SortIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    & > *:hover{
        cursor: pointer;
    }
`
const StyledCellTitle = styled.span`
    text-transform: capitalize;
`
const IconContainer = styled.div<SvgProps>`
    height: 15px;
    color: ${props => props.isSelected && props.isSortType ? '#898989' : '#cfcfcf'};
`
const StyledrArowSortedUp = styled(TiArrowSortedUp)`
    margin-block-end: -3px;
`
const StyledrArowSortedDown = styled(TiArrowSortedDown)`
    margin-block-start: -3px;
`

interface TableHeaderCellProps {
    txt: HeaderTitles,
    sortCell: (cellType: HeaderTitles, dir: string) => void,
    cellSortType: string
}
interface SvgProps {
    isSelected: boolean,
    isSortType: boolean
}
export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ txt, sortCell, cellSortType }) => {
    const [isSortedUp, setIsSortedUp] = useState(false)
    const [isSortedDown, setIsSortedDown] = useState(false)

    const setSort = (dir: string) => {
        sortCell(txt, dir)
        if (dir === 'up') {
            setIsSortedUp(!isSortedUp)
            setIsSortedDown(false)
        }
        else if (dir === 'down') {
            setIsSortedDown(!isSortedDown)
            setIsSortedUp(false)
        }
    }

    return (
        <StyledTableHeaderCell>
            <StyledCellTitle>{txt}</StyledCellTitle>
            {txt !== 'actions' && <SortIconsContainer>
                <IconContainer
                    isSelected={isSortedUp}
                    isSortType={cellSortType === txt}
                    onClick={() => { setSort('up') }}>
                    <StyledrArowSortedUp />
                </IconContainer>
                <IconContainer
                    isSelected={isSortedDown}
                    isSortType={cellSortType === txt}
                    onClick={() => { setSort('down') }}>
                    <StyledrArowSortedDown />
                </IconContainer>
            </SortIconsContainer>}
        </StyledTableHeaderCell >
    )
}