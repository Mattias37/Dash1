import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.banner}>
      <section  className={utilStyles.major}>
          <div className={utilStyles.inner}>
              <header className={utilStyles.major}>
                  <h1>Dash</h1>
                  <p>Micro Influence Network</p>
                  <ul className="actions">
                      <li><a href="#one" className={utilStyles.button}>Conoce más...</a></li>
                  </ul>
              </header>
              <div className={utilStyles.content}>

              </div>
          </div>
      </section>
      </div>
      <div id="main">
          <section id="one" className={utilStyles.tiles}>
              <article  style={{backgroundImage: `url('https://source.unsplash.com/random')`}}>
                  <header className={utilStyles.major}>
                      <h3>Impulsa tu Marca</h3>
                      <p>Estrategias Personalizadas</p>
                  </header>
                  <Link href="/dashinfluencer"><a className="link primary"></a></Link>
              </article>
              <article  style={{backgroundImage: `url('https://source.unsplash.com/random')`}}>
                  <header className={utilStyles.major}>
                      <h3>Conviértete en Micro Influenciador</h3>
                      <p>Alcanza tus objetivos</p>
                  </header>
                  <Link href="/dashinfluencer"><a className="link primary"></a></Link>
              </article>
              <article  style={{backgroundImage: `url('https://source.unsplash.com/random')`}}>
                  <header className={utilStyles.major}>
                      <h3>Quienes somos...</h3>
                      <p>Marca (dash) influence</p>
                  </header>
                  <Link href="/dashinfluencer"><a className="link primary"></a></Link>
              </article>
              <article  style={{backgroundImage: `url('https://source.unsplash.com/random')`}}>
                  <header className={utilStyles.major}>
                      <h3>Nuestros logros</h3>
                      <p>Dejanos sorpenderte...</p>
                  </header>
                  <Link href="/dashinfluencer"><a className="link primary"></a></Link>
              </article>
          </section>
          <section id="two">
              <div className="inner">
                  <header className="major">
                      <h2>¿Como funciona?</h2>
                  </header>
                  <p>Sea que que sea lo que estes necesitando sabemos que puedes generar grandes logros ya sea convirtiendote un verdadero influencer del siglo 21 o mejorar la influencia de tu marca... Son dos metas que envuelven a muchos de nosotros. Y Dash esta aqui para ayudarte a conseguirlos!</p>
                  <ul className="actions">
                      <li><Link href="/landing"><a className="button next">Toma tus primeros pasos...</a></Link></li>
                  </ul>
              </div>
          </section>
      </div>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href="/dashinfluencer" >
            <a>Dash Influencer</a>
          </Link>
        </p>
      </section>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
