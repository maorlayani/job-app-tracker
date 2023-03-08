import { HomePage } from './pages/home-page'
import './app.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { TrackerBoard } from './pages/tracker-board'
import { AddApplication } from './components/add-application/add-application'
import { AppHeader } from './components/app-header/app-header'

const AppStyle = styled.div`
  background-color: #f7ebff84;
  padding: 0;
  margin: 0;
`

export const App = () => {
  return (
    <AppStyle className="App">
      <AppHeader />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='tracker' element={<TrackerBoard />} />
        <Route path='/edit/:id?' element={<AddApplication />} />
      </Routes>
    </AppStyle >
  )
}


