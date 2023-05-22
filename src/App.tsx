import { HomePage } from './pages/home-page'
import './app.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { TrackerBoard } from './pages/tracker-board'
import { AddApplication } from './components/add-application/add-application'
import { AppHeader } from './components/app-header/app-header'
import { ApplicationFullDetails } from './pages/application-details/application-full-details'
import Globalfonts from './assets/global-fonts'
import { Archive } from './pages/archive/archive'
import { SignupLogin } from './pages/signup-login/signup-login'

const AppStyle = styled.div`
  padding: 0;
  margin: 0;
`

export const App = () => {
  return (
    <AppStyle className="App">
      <Globalfonts />
      <AppHeader />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='tracker' element={<TrackerBoard />} >
          <Route path=':applicationId' element={<ApplicationFullDetails />} />
        </Route>
        <Route path='add' element={<AddApplication />} />
        {/* <Route path='/tracker/:id?' element={<ApplicationFullDetails />} /> */}
        <Route path='archive' element={<Archive />} />
        <Route path='register/:status' element={<SignupLogin />} />
      </Routes>
    </AppStyle >
  )
}
// ROD2zXHuVCEqwyi9 

