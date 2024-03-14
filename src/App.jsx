import {
  WelcomeView,
  AboutView,
  ProjectsView,
  ContactMe,
  TemporalDesktopAdvice
} from '../src/views'
import { NavBar } from './components/ui/NavBar'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <TemporalDesktopAdvice/>
        <WelcomeView/>
        <AboutView/>
        <ProjectsView/>
        <ContactMe/>
      </main>
    </>
  )
}

export default App
