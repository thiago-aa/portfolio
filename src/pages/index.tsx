// import Styles from '../styles/Content.module.css'
import { useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

export default function Home() {
  const [page, setPage] = useState()
  const handlePage = (page: string) => {

  }
  return (
    <div style={{display: "flex"}}>
      <SideMenu/>
      <Content/>
    </div>
  )
}
