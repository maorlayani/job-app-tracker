import { HomePage } from './pages/home-page'
import './app.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { TrackerBoard } from './pages/tracker-board'
import { AddApplication } from './components/add-application'

const AppStyle = styled.div`
  background-color: #f7ebff84;
  padding: 0;
  margin: 0;
`

export const App = () => {
  return (
    <AppStyle className="App">
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='tracker' element={<TrackerBoard />} />
        <Route path=':add' element={<AddApplication />} />
      </Routes>
    </AppStyle >
  )
}


