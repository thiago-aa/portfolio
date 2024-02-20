export default function Analytics() {
  return (
    <>
      <script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-ZNR1VQD92H"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ZNR1VQD92H');
          `
        }} />
    </>
  )
}