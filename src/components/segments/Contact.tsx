import styles from '../../styles/Contact.module.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Contact(){
  return (
    <div className={styles.contactContainer}>
      <h1>Caso queira entrar em contato comigo, use algum dos seguintes canais</h1>
      <div className={styles.buttonsContainer}>
        <a style={{color: '#0e76a8'}} href="https://www.linkedin.com/in/thiago-almeida22/" target='_blank'><LinkedInIcon className={styles.linkedinColor}/></a>
        <a style={{color: '#00E676'}} href='https://wa.me/5515981546148' target='_blank'><WhatsAppIcon/></a>
        <a style={{color: '#FF6961'}} href="mailto:almeida.thiagoalvesde@gmail.com" target='_blank'><EmailIcon className={styles.mailColor}/></a>
      </div>
    </div>
  )
}