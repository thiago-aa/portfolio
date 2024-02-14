import styles from '../styles/Project.module.css'
import {} from './icons'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

interface ProjectProps {
  title: string;
  repoUrl: string;
  siteUrl: string;
  imgUrl: string;
  children: any;
}


export default function Project(props: ProjectProps) {
  const {title, repoUrl, siteUrl, imgUrl, children} = props;

  return (
    <div className={styles.projectContainer}>
      <div>        
        <div className={styles.imgContainer}>        
        <h1>{title}</h1>
        <p>
          {children}
        </p>
        </div>
          <img src={imgUrl} alt={`Screenshot do app ${title}`} />
          <div className={styles.buttonsContainer}>            
            <a href={repoUrl} target="_blank"><GitHubIcon style={{color: 'black'}}/></a>
            <a href={siteUrl} target="_blank"><LanguageIcon style={{color: '#68B3DB'}}/></a>
          </div>
      </div>
    </div>
  )
}