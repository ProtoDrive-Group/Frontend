import '@/styles/globals.css'
import ThemeProvider from '@/provider/ChakraProvider'
import ReduxProvider from '@/provider/ReduxProvider'
import RouteGaurd from '@/provider/RouteGaurd'
import DefaultLayout from '@/layout/default'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <RouteGaurd>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </RouteGaurd>
      </ReduxProvider>
    </ThemeProvider>
  )
}
