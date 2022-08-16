import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Auth0Provider
        domain="dev-ngwp0q4r.us.auth0.com"
        clientId="Xu4ywTIHaIpoyAcnwWtdDrlQjYtYRjfS"
        redirectUri={"http://localhost:3000/test"}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  )
}

export default MyApp
