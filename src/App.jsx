import {
  WelcomeView,
  AboutView,
  ProjectsView,
  ContactMe
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
        <ContactMe/>
      </main>
    </>
  )
}

export default App
