import '@/styles/globals.css'
import ThemeProvider from '@/provider/ChakraProvider'
import ReduxProvider from '@/provider/ReduxProvider'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  )
}
