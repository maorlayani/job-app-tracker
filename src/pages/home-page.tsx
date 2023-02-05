
import styled from 'styled-components'
import { TrackerBoard } from './tracker-board'
import axios from 'axios';
import { saveComanyData } from '../services/localStorageService'
import { MY_BRAND_API_KEY, MY_BRAND_BASE_URL } from '../praivte'


const StyledH1 = styled.h1`
color: red;
text-align:center;`

const StyledButton = styled.button`
padding: 10px;
background-color: lightgreen;
border: none;
border-radius: 5%;
margin: 0 auto;
display: block;
&:hover{
    cursor: pointer;
    background-color: lightgray;
}`


export const HomePage = () => {

    const getLogo = async (companyName: string) => {
        try {
            console.log(`${MY_BRAND_BASE_URL}${companyName}`);

            const apiData = await axios.get(
                `${MY_BRAND_BASE_URL}${companyName}`, {
                headers: {
                    'Authorization': `Bearer ${MY_BRAND_API_KEY}`
                }
            }
            )
            console.log(apiData.data)
            saveComanyData(apiData.data)
        } catch (err: any) {
            console.log(err);

        }
    }
    return <>
        {/* <button onClick={() => getLogo('google.com')}>GET CALL</button> */}
        <TrackerBoard />
    </>
}