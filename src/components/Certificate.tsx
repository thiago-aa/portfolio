interface CertificateProps {
  title: string;
  img: string;
  children: any;
  url: string;
}

export default function Certificate(props: CertificateProps) {
  const {children, img, title, url} = props
  return (
  <div>
    <h2>
      {title}
    </h2>
    <a href={url} target="blank">  
      <img src={img} alt={`Certificado do curso ${title}`} />
    </a>
    <p>{children}</p>
  </div>
  )

}