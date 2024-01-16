import styles from '../../styles/About.module.css'

export default function About(){
  return (
    <div className={styles.aboutContainer}>
    <div>
    <h2>Sobre Mim</h2>
      <p>
        Olá! Meu nome é <strong>Thiago Alves de Almeida</strong>, um entusiasta apaixonado por desenvolvimento web,
        atualmente residindo em Sorocaba. Com 23 anos de idade e formado em <strong>Análise e Desenvolvimento de
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
        <strong>JavaScript</strong> e <strong>CSS</strong>. Essa vivência proporcionou uma base sólida e uma compreensão
        aprofundada das necessidades práticas e técnicas do desenvolvimento web.
      </p>
    </div>
    <div>
      <h2>Conhecimentos</h2>
      <p>
        Além disso, estou entusiasmado em explorar as tecnologias mais recentes. Possuo conhecimento sólido em
        <strong>React.js</strong>, <strong>Next.js</strong> e <strong>TypeScript</strong>, o que me permite criar interfaces
        dinâmicas e eficientes. A familiaridade com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>,
        bem como a capacidade de aplicar essas tecnologias de forma harmoniosa, são elementos fundamentais na minha caixa
        de ferramentas de desenvolvedor.
      </p>
    </div>
    </div>
  )
}