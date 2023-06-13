import styled from "styled-components"
import { RequiredTag, StyledLabelTitle } from "../styles/input.styled"

interface FormLabelProps {
    htmlFor: string,
    labelTxt: string,
    isRequired: boolean
}
export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, labelTxt, isRequired }) => {
    return (
        <>
            <StyledLabelTitle htmlFor={htmlFor}>
                {labelTxt}
                {isRequired && <RequiredTag>*</RequiredTag>}
            </StyledLabelTitle>
        </>
    )
}