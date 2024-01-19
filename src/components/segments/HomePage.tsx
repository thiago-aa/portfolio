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
        <button className={styles.linkedinButton}><LinkedInIcon className={styles.linkedinColor}/></button>
        <button className={styles.githubButton}><GitHubIcon className={styles.githubColor}/></button>
        <button className={styles.codeButton}><EmailIcon className={styles.mailColor}/></button>
      </div>
    </div>
  )
}