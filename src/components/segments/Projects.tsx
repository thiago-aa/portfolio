import { useState } from 'react'
import styles from '../../styles/Projects.module.css'
import Project from '../Project'
import {IconNextjs, IconTypescript, ReactIcon} from '../icons/index'

export default function Projects(){
  const [project, setProject] = useState(1);

  const renderProject = (projectNumber: number) => {
    if(projectNumber === 1) {
      return (
        <Project 
          title='Multitwitch'
          imgUrl='https://raw.githubusercontent.com/thiago-aa/multitwitch/main/public/prints/home.png'
          repoUrl='https://github.com/thiago-aa/multitwitch'
          siteUrl='https://multitwitch-one.vercel.app/'
        >
          Um aplicativo da Web para exibir vários streams de Twitch em uma única página
          <h2>Tecnologias Usadas</h2>
          <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
          <span><IconNextjs className={styles.tech}/></span>
          <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        </Project>
      )
    }
  }
  return (
    <div className={styles.projectsContainer}>
      <div>
        {renderProject(project)}
      </div> 
      <div className={styles.buttonsContainer}>        
        <button 
          onClick={() => setProject(1)}
          className={project === 1 ? styles.projectButtonSelected : styles.projectButton}
        >
          Multitwitch
        </button>
        <button 
          onClick={() => setProject(2)}
          className={project === 2 ? styles.projectButtonSelected : styles.projectButton}
        >
          Projeto
        </button>
        <button 
          onClick={() => setProject(3)}
          className={project === 3 ? styles.projectButtonSelected : styles.projectButton}
        >
          Projeto
        </button>
        <button 
          onClick={() => setProject(4)}
          className={project === 4 ? styles.projectButtonSelected : styles.projectButton}
        >
          Projeto
        </button>    
      </div>
    </div>
  )
}