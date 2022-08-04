import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Login} from "../component/Login"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Login/>
    </div>
  )
}

export default Home
