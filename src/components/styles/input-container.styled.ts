import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction:column;
    /* gap: 4px; */
    align-items: flex-start;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    /* justify-content: space-between; */
    label {
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
        margin-block-end: 4px;
        font-size: .9em;
        font-family: inherit;
    }

    input, select, textarea {
        padding: 5px 15px 5px 10px;
        border: none;
        border-radius: 12px;
        outline-color: #ae84d1;
        width: 400px;
        height: 34px;
        box-sizing: border-box;
        font-size: .9em;
        font-family: inherit;
    }
    select{
        min-width: 250px;
    }
    textarea {
        font-family: Arial, Helvetica, sans-serif;
        resize: vertical;
        width: calc(2em + 800px);
        height: 80px;
    }

    span {
        font-family: inherit;
        font-size: .8em;
        font-weight: 600;
        margin-block-start: .3em;
        margin-block-end: 1em;
        &:hover {
            cursor: pointer;
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    /* margin: 0; */
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    input:focus-visible{
        /* outline-color: #ae84d1; */
        outline-style: solid;

    }
`