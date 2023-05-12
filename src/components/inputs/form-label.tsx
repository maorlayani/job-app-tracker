import styled from "styled-components"
import { StyledLabelTitle } from "../styles/input.styled"

interface FormLabelProps {
    htmlFor: string,
    labelTxt: string
}
export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, labelTxt }) => {
    return <StyledLabelTitle htmlFor={htmlFor}>{labelTxt}</StyledLabelTitle>
}