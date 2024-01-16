import styles from '../styles/Content.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Content() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <p>Meu nome é<br /><span className={styles.name}>Thiago Alves de Almeida</span>,<br /><span className={styles.about}>desenvolvedor Front-End</span>,<br />e esse é meu portfólio</p>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.linkedinButton}><LinkedInIcon className={styles.linkedinColor}/></button>
          <button className={styles.githubButton}><GitHubIcon className={styles.githubColor}/></button>
          <button className={styles.codeButton}><CodeIcon className={styles.codeColor}/></button>
        </div>
      </div>
    </div>
  )
}