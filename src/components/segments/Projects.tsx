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
      if(project === 4) {
        setProject(1);
      } else {
        setProject(project + 1);
      }
    } else {
      if(project === 1) {
        setProject(4);
      } else {
        setProject(project - 1);
      }
    }
  }

  const renderProject = (projectNumber: number) => {
    if(projectNumber === 2) {
      return (
        <Project
          title='Playlist Generator'
          imgUrl='imgs/playlistGenerator.png'
          repoUrl='https://github.com/thiago-aa/spotify-playlists-tools'
          siteUrl='https://spotify-playlists-tools.vercel.app/'
          key={projectNumber}
        >
          Um gerador de playlists usando a <strong>API do Spotify</strong>. A partir da seleção de artistas, o aplicativo irá gerar e adicionar à biblioteca do usuário uma playlist contendo as top 10 músicas mais tocadas de cada artista.
          <br />
          Aviso: O site ainda está em desenvolvimento, caso desejado testar sua funcionalidade, me envie um email contendo seu nome e o email cadastrado ao seu perfil do Spotify
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
          title='Multitwitch'
          imgUrl='https://raw.githubusercontent.com/thiago-aa/multitwitch/main/public/prints/home.png'
          repoUrl='https://github.com/thiago-aa/multitwitch'
          siteUrl='https://multitwitch-one.vercel.app/'
          key={projectNumber}
        >
          Multitwitch é uma aplicação web que proporciona aos usuários a experiência de assistir a múltiplas streams da Twitch em uma única página. O diferencial da plataforma reside na flexibilidade oferecida, permitindo que os usuários diferentes numeros de transmissões de acordo com suas preferências. Além disso, a aplicação incorpora validação de entrada para garantir a integridade e precisão das informações fornecidas pelos usuários.
          <h2>Tecnologias Usadas</h2>
          <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
          <span><IconNextjs className={styles.tech}/></span>
          <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        </Project>
      )
    }
    if(projectNumber === 1) {
      return (
        <Project 
          title='Landing Page RDS'
          imgUrl='imgs/rdsLP.png'
          repoUrl=''
          siteUrl='https://landing-page-rds.vercel.app/'
          key={projectNumber}
        >
          Landing page desenvolvida para a empresa R Digital Success, especializada em marketing digital. O objetivo da página é apresentar os serviços da empresa e captar leads por meio de um botão com chamada para ação (call to action).
          <h2>Tecnologias Usadas</h2>
          <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
          <span><IconNextjs className={styles.tech}/></span>
          <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        </Project>
      )
    }
    if(projectNumber === 4) {
      return (
        <Project 
          title='Quiz'
          imgUrl='imgs/quiz.png'
          repoUrl='https://github.com/thiago-aa/estudosNextReact/tree/main/quiz'
          siteUrl='https://quiz-five-gray.vercel.app/'
          key={projectNumber}
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
          Landing Page RDS
        </button>
        <button 
          onClick={() => setProject(2)}
          className={project === 2 ? styles.projectButtonSelected : styles.projectButton}
        >
          Playlist Generator
        </button>
        <button 
          onClick={() => setProject(3)}
          className={project === 3 ? styles.projectButtonSelected : styles.projectButton}
        >
          Multitwitch
        </button>
        <button 
          onClick={() => setProject(4)}
          className={project === 4 ? styles.projectButtonSelected : styles.projectButton}
        >
          Quiz
        </button>
      </div>
      {/* Menu para o Mobile */}
      <div className={styles.arrowMenuContainer}>
        <button onClick={() =>  handleArrowButton('back')}><ArrowBackIcon/></button>
        <h1>
          {
            project === 1 ? (
              'Landing Page RDS'
            ) : project === 2 ? (
              'Playlist Generator'
            ) : project === 3 ?(
              "Multitwitch"
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