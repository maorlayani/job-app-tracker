import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Application } from '../../models/interfaces'
import { utilService } from '../../services/util.service'
import { ApplicationKeys } from '../../models/enums'

export const StyledDetailsTag = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .2em;
    gap: .5em;
    margin-block-end: 1em;
    textarea {
        line-height: 2;
        resize: vertical;
        min-height: 100px;
    }
`
export const TagTitle = styled.span`
    font-size: 1em;
    color: var(--primary-text);
    font-weight: 600;
`
export const TagContent = styled.span`
    min-width: 100%;
    min-height: 31px;
    font-size: 1em;
    box-shadow: 0 0 2px 1px var(--secondary-text);
    padding: .5em;
    border-radius: 3px;
    flex-grow: 1;
    font-size: 1em;
    color: var(--filter-text);
    overflow: hidden;
    text-overflow: ellipsis;
`
export const TagInput = styled(TagContent)`
    border: none;
    outline-color: var(--primary-button);
    font-family: inherit;

`

interface DetailsTagProps {
    title: string,
    content: string,
    name: ApplicationKeys,
    application: Application,
    isTextArea?: Boolean
    className?: string
    onUpdateApplication: (applicationToUpdate: Application) => void
}
export const DetailsTag: React.FC<DetailsTagProps> = ({ application, onUpdateApplication, title, content, isTextArea, name, className, ...props }) => {
    const [isEditMode, setIsEditMode] = useState(false)
    const [inputTextValue, setInputTextValue] = useState(application[name])
    const [inputNumberValue, setInputNumberValue] = useState(0)

    useEffect(() => {
        if (inputTextValue === undefined) setInputTextValue(application[name])
        if (name === 'postedDate' || name === 'submittedAt') setInputTextValue(content)
        else if (name === 'experience') {
            const numberPattern = /\d+/
            const matches = content.match(numberPattern)
            if (matches) setInputNumberValue(+matches)
        }
    }, [application[name]])

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode)
    }
    const onHandleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        let value
        if (name === 'experience') {
            setInputNumberValue(+ev.target.value)
            value = +ev.target.value
        }
        else {
            setInputTextValue(ev.target.value)
            value = ev.target.value
            if (name === 'postedDate' || name === 'submittedAt') {
                value = utilService.fromatDateToNumber(value)
            }
        }
        const applicationToUpdate = { ...application, [name]: value }
        onUpdateApplication(applicationToUpdate)
    }
    const setValueType = (isEditMode: boolean) => {
        if (name === 'experience') {
            if (isEditMode) return inputNumberValue
            return utilService.checkIsPlural(inputNumberValue, 'year')
        }
        if (!isEditMode && inputTextValue === '') return `Add ${title}`
        return inputTextValue
    }
    return (
        <StyledDetailsTag className={className} {...props}>
            <TagTitle>{title}</TagTitle>
            {!isEditMode &&
                <TagContent onClick={toggleEditMode}>
                    {setValueType(false)}
                </TagContent>}
            {isEditMode &&
                <TagInput as={isTextArea ? "textarea" : "input"}
                    type={name === 'experience' ? 'number' : 'text'}
                    name={name}
                    value={setValueType(true)}
                    onChange={onHandleChange}
                    onBlur={toggleEditMode}
                    placeholder={`Add ${title}`}
                    autoFocus />}
        </StyledDetailsTag >
    )
}