import styled from 'styled-components';
import { read, utils, writeFile } from 'xlsx';
import { useAppDispatch } from '../hooks/redux-hooks';
import { addApplication } from '../store/reducers/tracker-slice';
import { StyledButton } from './styles/button.styled';
// import XLSX from 'xlsx';

const FileInput = styled.input`
   padding: .7em;
   border-radius: 3px;
   border: none;
   background-color: #ae84d1;
   color: #fff;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: 500;
   font-size: 1em;
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

    const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        let file: any
        if (event.target.files?.length) {
            file = event.target.files[0]
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const data = new Uint8Array(e.target.result);
            const workbook = read(data, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[1]];
            const excelData: any[] = utils.sheet_to_json(worksheet);
            // Do something with the data here
            console.log(excelData);
            excelData.forEach(app => {
                dispatch(addApplication(app))
            })
        };
        reader.readAsArrayBuffer(file);
    }
    return <>
        {/* <label htmlFor="upload-file">Uplaod file</label> */}
        <FileInput type="file" name="upload-file" id="upload-file" onChange={handleFile} />
    </>
}