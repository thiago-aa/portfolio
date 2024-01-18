import styles from '../../styles/About.module.css'
import HtmlIcon from '@mui/icons-material/Html';
import { ReactIcon, IconNextjs, IconCss3, IconHtml5, IconJavascript, IconTypescript } from '../icons';

export default function About(){
  return (
    <div className={styles.aboutContainer}>
    <div>
    <h2>Sobre Mim</h2>
      <p>
        Olá! Meu nome é <strong>Thiago Alves de Almeida</strong>, um entusiasta apaixonado por desenvolvimento web,
        atualmente residindo em Sorocaba tenho 23 anos de idade e sou formado em <strong>Análise e Desenvolvimento de
        Sistemas</strong> pela <strong>Fatec Sorocaba</strong>, estou comprometido em trazer soluções criativas e
        eficientes para desafios no universo do front-end.
      </p>
    </div>
    <div>      
      <h2>Experiência</h2>
      <p>
        Estagiei por dois anos na <strong>seção de sistema  da Prefeitura de Sorocaba</strong>, onde pude aprimorar
        minhas habilidades em diversas tecnologias. Minha experiência abrange o desenvolvimento em <strong>PHP</strong>,
        a manutenção de páginas web, a criação de sites em <strong>WordPress</strong> e a manipulação de <strong>HTML</strong>,
        <strong> JavaScript</strong> e <strong>CSS</strong>. Essa vivência proporcionou uma base sólida e uma compreensão
        aprofundada das necessidades práticas e técnicas do desenvolvimento web.
      </p>
    </div>
    <div>
      <h2>Conhecimentos</h2>
      <p>
        Possuo conhecimentos sólidos em <strong>React.js</strong>, <strong>Next.js</strong> e <strong>TypeScript</strong> para criação de interfaces dinâmicas. Habilidades sólidas em <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, aplicadas de forma harmoniosa, buscando explorar continuamente as mais recentes tecnologias.
      </p>
      <div className={styles.techsContainer}>
        <span><ReactIcon className={styles.tech} fill="#0284C7"/></span>
        <span><IconNextjs className={styles.tech}/></span>
        <span><IconTypescript className={styles.tech} fill='#2F74C0'/></span>
        <span><IconHtml5 className={styles.tech} fill='#DD4B24'/></span>
        <span><IconCss3 className={styles.tech} fill='#1B83C1'/></span>
        <span><IconJavascript className={styles.tech} fill='#E8D44D'/></span>
      </div>
    </div>
    </div>
  )
}