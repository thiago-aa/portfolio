import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <nav className={styles.container}>
      <a href="#sobre-mim">Sobre Mim</a>
      <a href="#certificados">Certificados</a>
      <a href="#projetos">Projetos</a>
    </nav>
  )
}