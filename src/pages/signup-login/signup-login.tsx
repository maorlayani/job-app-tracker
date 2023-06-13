import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { CardButton, StyledButton, StyledLink } from '../../components/styles/buttons.styled'
import { Input } from '../../components/styles/input.styled'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { signup, login } from '../../store/reducers/user-slice'
import { RootState } from '../../store/store'
import { resetApplications } from '../../store/reducers/tracker-slice'
import { userService } from '../../services/user.service'
import { InputMsgTag } from '../../components/styles/tag.styled'

const StyledSignupLogin = styled.div`
    background-color: #f9fafc;
    min-height: 100vh;
    width: 100%;
    padding-block-start: 40px;
`
const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1em;
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
const GoogleLoginButton = styled(CardButton)`
    width: 100%;
`
type Inputs = {
    username: string,
    email: string,
    password: string,
}
export const SignupLogin = () => {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector((state: RootState) => state.user.user)

    const { register, formState: { errors }, handleSubmit, reset } = useForm<Inputs>()
    useEffect(() => {
        if (user) {
            dispatch(resetApplications())
            navigate('/tracker')
        }
    }, [user])
    useEffect(() => {
        reset()
    }, [params.status])
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (params.status === 'signup') dispatch(signup(data))
        else if (params.status === 'login') dispatch(login(data))
    }

    return (
        <StyledSignupLogin>
            <MainContentContainer>
                <Title>Job App Tracker</Title>
                <InputsContainer>
                    <InputsTitle>{params.status} to App</InputsTitle>
                    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
                        {params.status === 'signup' && <RegisterInput {...register("username", { required: true, maxLength: 20 })} placeholder='Enter Username' />}
                        {params.status === 'signup' && errors.username?.type === 'required' &&
                            <InputMsgTag>*Email is required</InputMsgTag>}
                        <RegisterInput  {...register("email", { required: true, maxLength: 40 })} type="email" placeholder='Enter Email' />
                        {errors.email?.type === 'required' &&
                            <InputMsgTag>*Email is required</InputMsgTag>}
                        <RegisterInput type='password' {...register("password", { required: true, minLength: 8 })} placeholder='Enter Password' />
                        {errors.password?.type === 'required' &&
                            <InputMsgTag>*Password is required</InputMsgTag>}
                        {errors.password?.type === 'minLength' &&
                            <InputMsgTag>*Password must include at least 8 characters</InputMsgTag>}
                        {/* <GoogleLoginButton onClick={() => userService.googleLogin()}>Login via Google</GoogleLoginButton> */}
                        <StyledButton>Continue</StyledButton>
                    </RegisterForm>
                    {params.status === 'signup' && <StyledLink to={'/register/login'}>Already have an account? Sign in</StyledLink>}
                    {params.status === 'login' && <StyledLink to={'/register/signup'}>Need an account? Sign up</StyledLink>}
                    <StyledLink to={'/'}>Back Home</StyledLink>
                </InputsContainer>
            </MainContentContainer>
        </StyledSignupLogin>
    )
} 