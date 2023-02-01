import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction:column;
    /* gap: 4px; */
    align-items: flex-start;
    /* justify-content: space-between; */
    label{
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
        margin-block-end: 4px;
    }

    input, select, textarea{
        padding: 10px;
        border: none;
        border-radius: 3px;
        outline-color: #ae84d1;
        width: 250px;
    }
    select{
        min-width: 270px;
    }
    textarea{
        font-family: Arial, Helvetica, sans-serif;
        resize: vertical;
    }
    `