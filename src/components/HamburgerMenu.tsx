import styles from '../styles/HamburgerMenu.module.css'
import { useState } from 'react';

interface HamburgerMenuInterface {
  setPage: (page: string) => void;
  page: string;
}

export default function HamburgerMenu(props: HamburgerMenuInterface) {
  const {page, setPage} = props
  const [menuVisibility, setMenuVisibility] = useState(false);
  const handleButtonClick = (e: any) => {
    setPage(e.target.textContent);
    setMenuVisibility(false);
  }

  return (
    <div className={styles.container}>
      <div className={menuVisibility ? styles.menuVisible : styles.hiddenMenu} >
        <span className={styles.profileContainer}>          
          <img src="/imgs/eu.jpg" alt="foto de perfil" />
          <div>
            <h1>Thiago Alves de Almeida</h1>
            <h2>Desenvolvedor Front-End</h2>
          </div>
        </span>
        <a onClick={(e: any) => handleButtonClick(e)} className={page === 'Home' ? styles.buttonActivated : styles.button}>Home</a>
        <a onClick={(e: any) => handleButtonClick(e)} className={page === 'Sobre Mim' ? styles.buttonActivated : styles.button}>Sobre Mim</a>
        <a onClick={(e: any) => handleButtonClick(e)} className={page === 'Certificados' ? styles.buttonActivated : styles.button}>Certificados</a>
        <a onClick={(e: any) => handleButtonClick(e)} className={page === 'Projetos' ? styles.buttonActivated : styles.button}>Projetos</a>        
        <a onClick={(e: any) => handleButtonClick(e)} className={page === 'Contato' ? styles.buttonActivated : styles.button}>Contato</a>
      </div>
      <div className={styles.hamburgerMenu} onClick={() => setMenuVisibility(!menuVisibility)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}