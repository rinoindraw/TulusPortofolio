import { NavBar } from "./components/navbar/Navbar";
import { Banner } from './components/banner/Banner';
import { About } from './components/about/About';
import { Skill } from './components/skill/Skill';
import { OrganizationExp } from './components/organization/OrganizationExp';
import { Experience } from './components/experience/Experience';
import { Project } from './components/project/Project';
import { Achievement } from './components/achievement/Achievement';
import { License } from './components/license/License'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skill />
      <OrganizationExp />
      <Experience />
      <Project />
      <Achievement />
      <License />
    </div>
  );
}

export default App;
