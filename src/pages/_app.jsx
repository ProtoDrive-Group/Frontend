import '@/styles/globals.css'
import ThemeProvider from '@/provider/ChakraProvider'
import ReduxProvider from '@/provider/ReduxProvider'
import RouteGaurd from '@/provider/RouteGaurd'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <RouteGaurd>
          <Component {...pageProps} />
        </RouteGaurd>
      </ReduxProvider>
    </ThemeProvider>
  )
}
