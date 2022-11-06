import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Login() {
    return (
      <div>
        <Head>
          <title>FOOLISH plastic model shop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <Navbar searchbar={false} navauth={false}/>
        </main>
  
      </div>
    )
  }
  