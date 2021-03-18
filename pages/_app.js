import { Box, Text, Footer, Grommet, Heading } from 'grommet'
import Head from 'next/head'
import '../styles/globals.css'

const styles = {
  grommetStyle: {
    "background": "linear-gradient(180deg, rgba(125,76,219,1) 0%, rgba(128,203,196,1) 100%)",
    "display": "flex",
    "flex-direction": "column",
    "min-height": "100%"
  },
  footerStyle: {
    "background": "transparent",
    "justify-content": "center",
  }
}

function MyApp({ Component, pageProps }) {
  return ( 
    <Grommet style={styles.grommetStyle}>
      <Head>
        <meta name="theme-color" content="#7d4fdb"/>
      </Head>
      <Component {...pageProps} /> 
      <Footer pad="small" style={styles.footerStyle}>
          <Heading level={6} margin="small">
            {`© ${new Date().getFullYear()} Copyright OneKey Systems`}
          </Heading>
      </Footer>
    </Grommet>
    )
}

export default MyApp
