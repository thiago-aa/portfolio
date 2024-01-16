import styles from '../styles/SideMenu.module.css'


export default function SideMenu(){
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
        <a href="#sobre-mim">Home</a>
        <a href="#sobre-mim">Sobre Mim</a>
        <a href="#certificados">Certificados</a>
        <a href="#projetos">Projetos</a>
        <a href="#projetos">Contato</a>
      </div>
    </nav>
  )
}