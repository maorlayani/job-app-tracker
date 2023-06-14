import styled from "styled-components"
import { ChangeEvent, DragEvent, useRef, useState } from "react";
import { StyledLabelTitle } from "../styles/input.styled";
import { appwriteUploadService } from "../../services/appwrite.upload";
import { Register } from "../../models/interfaces";
import { SetApplication } from "../add-application/fourth-section";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setLoading } from "../../store/reducers/tracker-slice";
import { RootState } from "../../store/store";
import Loader from "../../assets/svg/loader.svg"
import { ReactComponent as CloseIcon } from "../../assets/svg/red-close-icon.svg"
const StyledDragDropFile = styled.div`
`

const FileInputContainer = styled.div`
    height: 150px;
    width: 100%;
    text-align: center;
    position: relative;
    margin-block-start: 8px;
    `
interface LabelFileUploadProps {
    isDragActive: boolean
}
const LabelFileUpload = styled.label<LabelFileUploadProps>`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 6px;
    border-style: dashed;
    border-color: var(--primary-button);
    background-color: ${props => props.isDragActive ? 'var(--white-background)' : 'var(--background)'};
`
const UploadButton = styled.button`
    cursor: pointer;
    padding: 0.25rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
    &:hover {
        text-decoration-line: underline;
    }
`
const DragFileElement = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
const InputFileUplaod = styled.input`
    display: none;
`
const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const UploadLoader = styled.img`
    width: 75px;
    height: 75px;
`
const FileNameTag = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-button);
`
const DeleteIconContainer = styled.div`
    display: inline-block;
    color: var(--danger-button);
    margin-inline-start: 2rem;
    svg {
        margin-block-start: 4px;
    }
    &:hover{
        cursor: pointer;
    }
`

interface DragDropFileProps {
    application: any,
    setApplication: SetApplication
}
export const DragDropFile: React.FC<DragDropFileProps> = ({ application, setApplication }) => {
    const dispatch = useAppDispatch()
    const loading = useAppSelector((state: RootState) => state.tracker.loading)

    // drag state
    const [dragActive, setDragActive] = useState(false)
    // ref
    const inputRef = useRef<HTMLInputElement>(null)

    // handle drag events
    const handleDrag = function (e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    // triggers when file is dropped
    const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // handleFiles(e.dataTransfer.files);
            const fileMetadata = await appwriteUploadService.uploadFile(e.dataTransfer.files[0])
            setApplication((prevState: any) => ({ ...prevState, resume: fileMetadata }))
        }
    }

    // triggers when file is selected with click
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            // handleFiles(e.target.files);
            dispatch(setLoading({ type: 'upload', isLoading: true }))
            const fileMetadata = await appwriteUploadService.uploadFile(e.target.files[0])
            dispatch(setLoading({ type: 'upload', isLoading: false }))
            setApplication((prevState: any) => ({ ...prevState, resume: fileMetadata }))
        }
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        if (inputRef.current) inputRef.current.click()
    }
    const clearFile = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation()
        e.preventDefault()
        appwriteUploadService.deleteFile(application.resume.id)
        setApplication((prevState: any) => ({ ...prevState, resume: '' }))
    }
    return (
        <StyledDragDropFile>
            <StyledLabelTitle as="span">Attach Resume</StyledLabelTitle>
            <FileInputContainer onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <InputFileUplaod ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
                <LabelFileUpload htmlFor="input-file-upload" isDragActive={dragActive}>
                    {!loading.isLoading && <ContentContainer>
                        <p>Drag and drop here</p>
                        <p>or</p>
                        <UploadButton type="button" onClick={onButtonClick}>Upload a file</UploadButton>
                        {application.resume.name &&
                            <FileNameTag>
                                {application.resume.name}
                                <DeleteIconContainer onClick={clearFile} >
                                    <CloseIcon />
                                </DeleteIconContainer>
                            </FileNameTag>}
                    </ContentContainer>}
                    {loading.isLoading && loading.type === 'upload' && <UploadLoader src={Loader} />}
                </LabelFileUpload>
                {dragActive && <DragFileElement
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}>
                </DragFileElement>}
            </FileInputContainer>
        </StyledDragDropFile>
    )
}