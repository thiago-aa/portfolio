import styles from '../../styles/Certificates.module.css'
import Certificate from '../Certificate'

export default function Certificates(){
  return (
    <div className={styles.certificatesContainer}>
      <div>
        <h1 className={styles.title}>Certificados</h1>
        <Certificate 
          title='Análise e Desenvolvimento de Sistemas' 
          img='imgs/adsCertificate.png'
          url='imgs/adsCertificate.png' 
        >          
          Diploma de curso superior em Análise e Desenvolvimento de Sistemas na Fatec Sorocaba
        </Certificate>
        <Certificate 
          title='Basic HTML and HTML5' 
          img='imgs/htmlCertificate.png'
          url='https://www.freecodecamp.org/certification/thiago_almeida/responsive-web-design'
        >          
          Certificação em Design Responsivo utilizando HTML e CSS, para layouts responsivos com Flexbox e CSS Grid.
        </Certificate>
        <Certificate 
          title='JavaScript Algorithms and Data Structures' 
          img='imgs/jsCertificate.png'
          url='https://www.freecodecamp.org/certification/thiago_almeida/javascript-algorithms-and-data-structures'
        >          
          Certificação em Algoritmos e Estruturas de Dados em JavaScript
        </Certificate>
        <Certificate title='Next.js e React - Aprenda com Projetos' img='imgs/nextCertificate.jpg' url='https://www.udemy.com/certificate/UC-f7d39776-fcd6-455b-aee0-8d1e450b90e8/'>          
          Certificação em Next.js e react, com diversos projetos para fim didáticos
        </Certificate>
      </div>
    </div>
  )
}