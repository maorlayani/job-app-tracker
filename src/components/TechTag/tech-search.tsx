import styled from "styled-components"
import { Input } from "../styles/input.styled"
import { StyledButton } from "../styles/buttons.styled"
import { useState } from "react"
import { setTechnologiesSearch } from "../../store/reducers/tracker-slice"
import { useAppDispatch } from "../../hooks/redux-hooks"
import { ImSearch } from "react-icons/im"

const StyledTechSearch = styled.div`
    display: flex;
    margin-block-end: 8px;
    gap: 10px;
    padding: 8px 8px 8px 0;
    width: 100%;
`
const TechSearchInput = styled(Input)`
    height: 34px;
    width: unset;
    flex-grow: 1;
    outline: none;
`
const SearchTag = styled.span`
    height: 34px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ae84d1;
    color: #fff;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-inline-start: -20px;
    box-shadow: 1px 1px 3px 1px #cfcfcf;
`

export const TechSearch = () => {
    const dispatch = useAppDispatch()

    const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTechnologiesSearch(ev.target.value))
    }
    return (
        <StyledTechSearch>
            <TechSearchInput type="text" onChange={changeHandler} placeholder="Search Technology..." />
            <SearchTag><ImSearch></ImSearch></SearchTag>
        </StyledTechSearch>
    )
}