import styles from '../../styles/Projects.module.css'
import Project from '../Project'

export default function Projects(){
  return (
    <div className={styles.projectsContainer}>
      <div>
        <Project 
          title='Multitwitch'
          imgUrl='https://raw.githubusercontent.com/thiago-aa/multitwitch/main/public/prints/home.png'
          repoUrl='https://github.com/thiago-aa/multitwitch'
          siteUrl='https://multitwitch-one.vercel.app/'
        >
          Um aplicativo da Web para exibir vários streams de Twitch em uma única página
        </Project>
      </div>
      <div className={styles.buttonsContainer}>        
        <button>Projeto</button>
        <button>Projeto</button>
        <button>Projeto</button>
        <button>Projeto</button>    
      </div>
    </div>
  )
}