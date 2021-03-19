import { Box, Text, Footer, Grommet, Heading } from 'grommet'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <Grommet className="globalGrommetContainerStyle">
      <Head>
        <meta name="theme-color" content="#7d4fdb"/>
      </Head>
      <Component {...pageProps} /> 
      <Footer pad="small" className="globalFooterStyle">
          <Heading level={6} margin="small">
            {`© ${new Date().getFullYear()} Copyright OneKey Systems`}
          </Heading>
      </Footer>
    </Grommet>
    )
}

export default MyApp
