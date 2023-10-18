import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '@/provider/ChakraProvider'
import ReduxProvider from '@/provider/ReduxProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  )
}
