import styled from 'styled-components';
import { read, utils, writeFile } from 'xlsx';
import { useAppDispatch } from '../hooks/redux-hooks';
import { DraftApplication } from '../models/interfaces';
import { addApplication } from '../store/reducers/tracker-slice';
import { StyledButton } from './styles/button.styled';

const LabelInputFile = styled.label`
    padding: 7px 13px;
    border-radius: 3px;
    border-radius: 1.6em;
    border: none;
    background-color: #ae84d1;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 1em;
    align-self: center;
    &:hover{
        background-color: #ae84d1bc;
        cursor: pointer;
        }
    &:active{
        background-color: #a673cf;
    }
`

export const UploadExcelFile = () => {
    const dispatch = useAppDispatch()

    const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any
        if (event.target.files?.length) {
            file = event.target.files[0]
        }
        const reader = new FileReader()
        reader.onload = (e: any) => {
            const data = new Uint8Array(e.target?.result as ArrayBuffer)
            const workbook = read(data, { type: 'array' })
            const worksheet = workbook.Sheets[workbook.SheetNames[1]]
            const excelData = utils.sheet_to_json<DraftApplication>(worksheet)
            // console.log(excelData)
            excelData.forEach(app => {
                dispatch(addApplication(app))
            })
        }
        reader.readAsArrayBuffer(file)
    }
    return <>
        <LabelInputFile htmlFor="upload-file">Uplaod excel file</LabelInputFile>
        <input type="file" name="upload-file" id="upload-file" onChange={handleFile} hidden />
    </>
}