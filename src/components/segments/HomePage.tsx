import styles from '../../styles/HomePage.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div>
        <p><span className={styles.firstLine}>Meu nome é</span><br /><span className={styles.name}>Thiago Alves de Almeida,</span><br /><span className={styles.about}>desenvolvedor Front-End,</span><br /><span className={styles.lastLine}>e esse é meu portfólio</span></p>
      </div>
      <div className={styles.buttonsContainer}>
        <a className={styles.linkedinButton} href="https://www.linkedin.com/in/thiago-almeida22/" target='_blank'><LinkedInIcon className={styles.linkedinColor}/></a>
        <a className={styles.githubButton} href="https://github.com/thiago-aa" target='_blank'><GitHubIcon className={styles.githubColor}/></a>
        <a className={styles.codeButton} href="mailto:almeida.thiagoalvesde@gmail.com" target='_blank'><EmailIcon className={styles.mailColor}/></a>
      </div>
    </div>
  )
}