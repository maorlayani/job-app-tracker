import { useState } from "react"
import styled from "styled-components"
import { FormLabel } from "./form-label"

const StyledFormRadioInput = styled.div`
    // width: 160px;
display:flex;
align-items: center;
margin-block-start: 8px;
    `

const RadioInput = styled.input`
    margin: 0 5px 10px 0;
`
interface FormRadioInputProps {
    name: string,
    labelTxt: string,
    id: string,
    setSelectedInputValue: (selectedInputValue: string) => void
}
export const FormRadioInput: React.FC<FormRadioInputProps> = ({ name, labelTxt, id, setSelectedInputValue }) => {
    const changeHandler = () => {
        setSelectedInputValue(id)
    }

    return (
        <StyledFormRadioInput>
            <RadioInput
                type="radio"
                name={name}
                value={id}
                id={id}
                multiple={false}
                onChange={changeHandler} />
            <FormLabel htmlFor={id} labelTxt={labelTxt} />
        </StyledFormRadioInput>
    )
}