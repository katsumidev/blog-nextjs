import type { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const files = fs.readdirSync(path.join("src/posts"))
  const posts = files.map((filename) => {
    
  })

  return {
    props: {

    }
  }
}

export default Home
