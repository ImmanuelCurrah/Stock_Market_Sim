import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Auth0Provider } from "@auth0/auth0-react";
// import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  // const [domain, setDomain] = useState<string>();

  // useEffect(() => {
  //   const domain = process.env.DOMAIN;
  //   const client_id = process.env.CLIENT_ID
  //   setDomain(domain);
  // }
  // ,[])

  // console.log(domain)

  return (
    <>
      <Auth0Provider
        domain="dev-ngwp0q4r.us.auth0.com"
        clientId="Xu4ywTIHaIpoyAcnwWtdDrlQjYtYRjfS"
        redirectUri={"http://localhost:3000/stocks"}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  )
}

export default MyApp
