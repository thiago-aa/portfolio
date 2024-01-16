// import Styles from '../styles/Content.module.css'
import { useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import HomePage from "../components/segments/HomePage";
import Projects from "../components/segments/Projects";
import About from "../components/segments/About";
import Certificates from "../components/segments/Certificates";
import Contact from "../components/segments/Contact";

export default function Home() {
  const [page, setPage] = useState<string>('Home');
  const handlePage = () => {
    if(page === 'Home') {
      return <HomePage/>
    }
    if(page === 'Sobre Mim') {
      return <About/>
    }
    if(page === 'Certificados') {
      return <Certificates/>
    }
    if(page === 'Projetos') {
      return <Projects/>
    }
    if(page === 'Contato') {
      return <Contact/>
    }
  }

  return (
    <div style={{display: "flex"}}>
      <SideMenu setPage={setPage}/>
      <Content page={handlePage()}/>
    </div>
  )
}
