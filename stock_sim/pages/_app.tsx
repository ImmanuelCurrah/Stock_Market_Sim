import '../styles/globals.css'
import { Auth0Provider } from '@auth0/auth0-react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
       <Auth0Provider
    domain="dev-ngwp0q4r.us.auth0.com"
    clientId="CiHidVqJCoxjAEO3Sc0e7OL9ZlVlvP5J"
    redirectUri={"https://localhost:3000"}
    >
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  )
}

export default MyApp
