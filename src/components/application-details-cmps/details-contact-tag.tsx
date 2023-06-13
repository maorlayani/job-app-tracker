import styled from 'styled-components'
import { TagContent, TagTitle } from './details-tag'
import { useEffect, useState } from 'react'
import { ContactKeys } from '../../models/enums'
import { Application, Contact } from '../../models/interfaces'

const StyledDetailsContactTag = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
`
const ContactTagTitle = styled(TagTitle)`
    width: 50px;
    font-size: .9em;
`
const ContactTagContent = styled(TagContent)`
    font-size: .9em;
    min-width: unset;
`
const ContactTagInput = styled(TagContent)`
    border: none;
    outline-color: var(--primary-button);
    font-family: inherit;
    font-size: .9em;
    min-width: unset;
`
interface DetailsContactTagProps {
    title: string,
    name: ContactKeys,
    application: Application,
    contact: Contact,
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const DetailsContactTag: React.FC<DetailsContactTagProps> = ({ onUpdateApplication, title, application, name, contact }) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputTextValue, setInputTextValue] = useState<any>('')
    useEffect(() => {
        if (application?.contact !== undefined) setInputTextValue(application.contact[name])
    }, [application])
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }
    const onHandleChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
        const value = ev.target.value
        setInputTextValue(value)
        const contactToUpdate = { ...application.contact }
        contactToUpdate[name] = value
        const applicationToUpdate = { ...application, contact: contactToUpdate }
        onUpdateApplication(applicationToUpdate)
    }
    const setValueType = () => {
        if (inputTextValue === '') return `Add contact ${title}`
        return inputTextValue
    }
    return (
        <StyledDetailsContactTag>
            <ContactTagTitle>{title}</ContactTagTitle>
            {!isEditMode &&
                <ContactTagContent onClick={toggleEditMode}>
                    {setValueType()}
                </ContactTagContent>}
            {isEditMode &&
                <ContactTagInput
                    as='input'
                    name={name}
                    value={inputTextValue}
                    onChange={onHandleChange}
                    onBlur={toggleEditMode}
                    placeholder={`Add contact ${title}`}
                    autoFocus />}
        </StyledDetailsContactTag>
    )
}