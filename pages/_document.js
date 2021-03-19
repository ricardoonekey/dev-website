import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
	<script>0</script>
      </Html>
    )
  }
}

export default MyDocument
