import { useEffect, useState } from "react"
import styled from "styled-components"
import { FirstSectionProps } from "../add-application/first-section"
import { InputsProps } from "./form-text-input"

const RangeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding:0;
    align-items: center;
    // margin-block-start: 20px;
    flex-direction: column;
    @media (min-width: 1050px) {
        width: 48%;
    }
    @media (min-width: 1270px) {
        width: 31%;
    }
`
const RangeInputContainer = styled.div`
    position: relative;
    width: 100%;
    height: 34px;
    display: flex;
`
const RangeInput = styled.input`
    padding: 0;
    font-size: 1em;
    width: 100%;

    @media (min-width: 1050px) {
        margin-block-start: 26px;
    }
`
const RangeLabel = styled.label`
    font-size: 1em;
    width: fit-content;
    margin-block-end: 25px;
    @media (min-width: 1050px) {
        flex-direction: column;
        margin-block-end: 15px;
    }
`

interface RangeValueProps {
    exp: number,
    diff: number
}

const RangeValue = styled.div<RangeValueProps>`
    background-color: var(--primary-button);
    color: var(--white-background);
    width: 30px;
    height: 25px;
    position: absolute;
    left: calc(${props => props.exp}% - ${props => props.diff}px);
    display: flex;
    justify-content: center;
    border-top-left-radius: 75%;
    border-top-right-radius: 75%;
    border-bottom-right-radius: 100%;
    padding: 4px 2px 2px 2px;
    top: -24px;
    @media (min-width: 1050px) {
        top: -12px;
    }
`
interface FormRangeInputProps extends FirstSectionProps, InputsProps { }


export const FormRangeInput: React.FC<FormRangeInputProps> = ({ register, exp, labelTxt, name, placeholder, isRequired }) => {
    const [rangeValueLeftPosDiff, setRangeValueLeftPosDiff] = useState(15)

    useEffect(() => {
        if (+exp >= 0 && +exp <= 2) setRangeValueLeftPosDiff(-5)
        else if (+exp <= 4) setRangeValueLeftPosDiff(0)
        else if (+exp <= 7) setRangeValueLeftPosDiff(5)
        else setRangeValueLeftPosDiff(10)
    }, [exp])

    const getExpRangeValuePos: () => number = () => {
        return ((+exp / 10) * 100)
    }
    return (
        <RangeContainer>
            <RangeLabel htmlFor={name}>{labelTxt}</RangeLabel>
            <RangeInputContainer>
                <RangeInput {...register(name, 'range')} min={0} max={10} step={1} />
                <RangeValue exp={getExpRangeValuePos()} diff={rangeValueLeftPosDiff}>{exp}</RangeValue>
            </RangeInputContainer>
        </RangeContainer>
    )
}