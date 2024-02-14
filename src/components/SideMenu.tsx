import styles from '../styles/SideMenu.module.css'

interface SideMenuProps {
  setPage: (page: string) => void;
  page: string;
}

export default function SideMenu(props: SideMenuProps){
  const {setPage, page} = props;
  return (
    <nav className={styles.container}>
      <div>
        <span>          
          <img src="/imgs/eu.jpg" alt="a foto do cara ae" />
        </span>
        <h1>Thiago Alves de Almeida</h1>
        <h2>Desenvolvedor Front-End</h2>
        <a onClick={(e: any) => setPage(e.target.textContent)} className={page === 'Home' ? styles.buttonActivated : styles.button}>Home</a>
        <a onClick={(e: any) => setPage(e.target.textContent)} className={page === 'Sobre Mim' ? styles.buttonActivated : styles.button}>Sobre Mim</a>
        <a onClick={(e: any) => setPage(e.target.textContent)} className={page === 'Certificados' ? styles.buttonActivated : styles.button}>Certificados</a>
        <a onClick={(e: any) => setPage(e.target.textContent)} className={page === 'Projetos' ? styles.buttonActivated : styles.button}>Projetos</a>
        <a onClick={(e: any) => setPage(e.target.textContent)} className={page === 'Contato' ? styles.buttonActivated : styles.button}>Contato</a>
      </div>
    </nav>
  )
}