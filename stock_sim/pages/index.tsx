import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginButton from '../components/Login'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      "hi"
      <LoginButton/>
    </div>
  )
}

export default Home
