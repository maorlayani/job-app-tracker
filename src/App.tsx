import { HomePage } from './pages/home-page'
import './app.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { TrackerBoard } from './pages/tracker-board'
import { AddApplication } from './components/add-application/add-application'
import { AppHeader } from './components/app-header/app-header'
import { ApplicationFullDetails } from './pages/application-full-details/application-full-details'

const AppStyle = styled.div`
  padding: 0;
  margin: 0;
`

export const App = () => {
  return (
    <AppStyle className="App">
      <AppHeader />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='tracker' element={<TrackerBoard />} >
          <Route path=':applicationId' element={<ApplicationFullDetails />} />
        </Route>
        <Route path='/edit/:id?' element={<AddApplication />} />
        {/* <Route path='/tracker/:id?' element={<ApplicationFullDetails />} /> */}
      </Routes>
    </AppStyle >
  )
}


