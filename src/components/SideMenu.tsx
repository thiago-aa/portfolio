import styles from '../styles/SideMenu.module.css'

interface SideMenuProps {
  setPage: (page: string) => void;
}

export default function SideMenu(props: SideMenuProps){
  const {setPage} = props;

  return (
    <nav className={styles.container}>
      <div>
        <span>          
          <img src="eu.jpg" alt="a foto do cara ae" />
        </span>
        {/* <p>
          <h1>Thiago Alves de Almeida</h1>
          <h2>Desenvolvedor Front-End</h2>
        </p> */}
        <a onClick={(e: any) => setPage(e.target.textContent)}>Home</a>
        <a onClick={(e: any) => setPage(e.target.textContent)}>Sobre Mim</a>
        <a onClick={(e: any) => setPage(e.target.textContent)}>Certificados</a>
        <a onClick={(e: any) => setPage(e.target.textContent)}>Projetos</a>
        <a onClick={(e: any) => setPage(e.target.textContent)}>Contato</a>
      </div>
    </nav>
  )
}