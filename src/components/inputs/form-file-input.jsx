import styled from "styled-components"
import { useRef, useState } from "react";
import { StyledLabelTitle } from "../styles/input.styled";

const StyledDragDropFile = styled.div`
`

const FileInputContainer = styled.div`
    height: 150px;
    width: 100%;
    text-align: center;
    position: relative;
    margin-block-start: 8px;
    `

const LabelFileUpload = styled.label`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-radius: 6px;
    border-style: dashed;
    border-color: #ae84d1;
    background-color: ${props => props.isDragActive ? '#ffffff' : '#f8fafc'};
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
export const DragDropFile = () => {
    // drag state
    const [dragActive, setDragActive] = useState(false)
    // ref
    const inputRef = useRef(null)

    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // handleFiles(e.dataTransfer.files);
        }
    }

    // triggers when file is selected with click
    const handleChange = function (e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            // handleFiles(e.target.files);
        }
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    }

    return (
        <StyledDragDropFile>
            <StyledLabelTitle as="span">Attach Resume</StyledLabelTitle>
            <FileInputContainer onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <InputFileUplaod ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
                <LabelFileUpload htmlFor="input-file-upload" isDragActive={dragActive}>
                    <div>
                        <p>Drag and drop here</p>
                        <p>or</p>
                        <UploadButton type="button" onClick={onButtonClick}>Upload a file</UploadButton>
                    </div>
                </LabelFileUpload>
                {dragActive && <DragFileElement
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}>
                </DragFileElement>}
            </FileInputContainer>
        </StyledDragDropFile>
    );
};