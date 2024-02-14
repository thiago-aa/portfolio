import { useState } from 'react'
import styles from '../../styles/Projects.module.css'
import Project from '../Project'
import {IconNextjs, IconTypescript, ReactIcon} from '../icons/index'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Projects(){
  const [project, setProject] = useState(1);

  const handleArrowButton = (direction: 'forward' | 'back') => {
    if(direction === 'forward') {
      if(project === 3) {
        setProject(1);
      } else {
        setProject(project + 1);
      }
    } else {
      if(project === 1) {
        setProject(3);
      } else {
        setProject(project - 1);
      }
    }
  }

  const renderProject = (projectNumber: number) => {
    if(projectNumber === 1) {
      return (
        <Project 
          title='Multitwitch'
          imgUrl='https://raw.githubusercontent.com/thiago-aa/multitwitch/main/public/prints/home.png'
          repoUrl='https://github.com/thiago-aa/multitwitch'
          siteUrl='https://multitwitch-one.vercel.app/'
          key={1}
        >
          Multitwitch é uma aplicação web que proporciona aos usuários a experiência de assistir a múltiplas streams da Twitch em uma única página. O diferencial da plataforma reside na flexibilidade oferecida, permitindo que os usuários diferentes numeros de transmissões de acordo com suas preferências. Além disso, a aplicação incorpora validação de entrada para garantir a integridade e precisão das informações fornecidas pelos usuários.
          <h2>Tecnologias Usadas</h2>
          <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
          <span><IconNextjs className={styles.tech}/></span>
          <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        </Project>
      )
    }
    if(projectNumber === 2) {
      return (
        <Project 
          title='Jogo das Portas'
          imgUrl='imgs/jogoPortas.png'
          repoUrl='https://github.com/thiago-aa/estudosNextReact/tree/main/portas'
          siteUrl='https://estudos-next-react.vercel.app/'
          key={2}
        >
          Jogo das Portas é uma aplicação web que replica o jogo "Let's Make a Deal", onde o jogador deve encontrar a porta onde está escondido o prêmio. A aplicação permite a personalização do número de portas presentes no jogo tal qual a seleção da porta premiada.
          <h2>Tecnologias Usadas</h2>
          <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
          <span><IconNextjs className={styles.tech}/></span>
          <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        </Project>
      )
    }
    if(projectNumber === 3) {
      return (
        <Project 
          title='Quiz'
          imgUrl='imgs/quiz.png'
          repoUrl='https://github.com/thiago-aa/estudosNextReact/tree/main/quiz'
          siteUrl='https://quiz-five-gray.vercel.app/'
          key={3}
        >
          Aplicação web de um quiz sobre conhecimentos gerais. Contém temporizador para cada pergunta, revelação do acerto/erro e exibição da pontuação final
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
          Portas
        </button>
        <button 
          onClick={() => setProject(3)}
          className={project === 3 ? styles.projectButtonSelected : styles.projectButton}
        >
          Quiz
        </button>
      </div>
      <div className={styles.arrowMenuContainer}>
        <button onClick={() =>  handleArrowButton('back')}><ArrowBackIcon/></button>
        <h1>
          {
            project === 1 ? (
              'Multitwitch'
            ) : project === 2 ? (
              'Portas'
            ) : (
              "Quiz"
            )
          }
        </h1>
        <button onClick={() => handleArrowButton('forward')}><ArrowForwardIcon/></button>
      </div>
      
    </div>
  )
}