import styled from 'styled-components'

const StyledFirstSectionTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    color: #18121dd2;
    width: 50%;
`
const TitleTag = styled.span`
    font-size: 1.25em;
    font-weight: 500;
`
const InstructionsTag = styled.span`
    font-size: .9rem;
`
interface FirstSectionTitleProps {
    title: string,
    instructions: string
}
export const FirstSectionTitle: React.FC<FirstSectionTitleProps> = ({ title, instructions }) => {
    return (
        <StyledFirstSectionTitle>
            <TitleTag>{title}</TitleTag>
            <InstructionsTag>{instructions}</InstructionsTag>
        </StyledFirstSectionTitle>
    )
}