import {
  WelcomeView,
  AboutView,
  ProjectsView
} from '../src/views'
import { NavBar } from './components/ui/NavBar'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <WelcomeView/>
        <AboutView/>
        <ProjectsView/>
      </main>
    </>
  )
}

export default App
