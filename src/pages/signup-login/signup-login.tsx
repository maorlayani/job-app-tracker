import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton } from '../../components/styles/buttons.styled'
import { Input } from '../../components/styles/input.styled'
import { useForm, SubmitHandler } from "react-hook-form"

const StyledSignupLogin = styled.div`
    background-color: #f9fafc;
    height: 100vh;
    width: 100%;
    // overflow-x: auto;
    overflow: hidden;
`
const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin: 120px 50px 120px 50px;
    @media (max-width: 500px) {
        margin-inline: 20px;
    }
    
`
const Title = styled.h1`
    font-size: 3em;
    @media (max-width: 500px) {
        font-size: 2em;
    }
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,.102);
    padding: 25px 40px;
    width: 450px;
    box-sizing: border-box;
    @media (max-width: 500px) {
        width: 100%;
    }
`
const InputsTitle = styled.span`
    text-transform: capitalize;
    color: #5e6c84;
    font-weight: 700;
    font-size: 1.1em;
    margin-block-end: 2em;
`

const RegisterForm = styled.form`
    width: 100%;
    gap: 1em;
    display: flex;
    flex-direction: column; 
    padding-block-end: 2em;
    border-bottom: 1px solid #cfcfcf;
`
const RegisterInput = styled(Input)`
    border: 2px solid #dfe1e6;
    box-shadow: none;
    font-family: inherit;
`
const RegisterSubmitbutton = styled(StyledButton)`
`
const StyledLink = styled(Link)`
    margin-block-start: .5em;   
    text-align: center;
`
type Inputs = {
    username: string,
    email: string,
    password: string,
};
export const SignupLogin = () => {
    const params = useParams()
    const { register, handleSubmit } = useForm<Inputs>()
    useEffect(() => {
        console.log(params.status);

    }, [])
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);


    }
    return (
        <StyledSignupLogin>
            <MainContentContainer>
                <Title>Job App Tracker</Title>
                <InputsContainer>
                    <InputsTitle>{params.status} to App</InputsTitle>
                    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
                        <RegisterInput {...register("username", { required: true, maxLength: 20 })} placeholder='Enter Username' />
                        {params.status === 'signup' && <RegisterInput  {...register("email", { required: true, maxLength: 40 })} type="email" placeholder='Enter Email' />}
                        <RegisterInput  {...register("password", { required: true, maxLength: 10 })} placeholder='Enter Password' />
                        <RegisterSubmitbutton>Continue</RegisterSubmitbutton>
                    </RegisterForm>
                    {params.status === 'signup' && <StyledLink to={'/register/login'}>Already have an account? Sign in</StyledLink>}
                    {params.status === 'login' && <StyledLink to={'/register/signup'}>Need an account? Sign up</StyledLink>}
                    <StyledLink to={'/'}>Back Home</StyledLink>
                </InputsContainer>
            </MainContentContainer>
        </StyledSignupLogin>
    )
}