
import clsx from 'clsx';
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Date from '../../components/date'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chart from './Chart';
import Chart1 from './Chart1';
import Deposits from './Deposits';
import Orders from './Orders';
import Orders1 from './Orders1';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dash Influencer 2020
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

export default function Dashboard({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <AppBar  >
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"

          >
          <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap >
            Dash Influencer
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          <Link href="/dashinfluencer" >
            <a>Dash Influencer</a>
          </Link>
        </p>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={utilStyles.chartStyle} >
            <Chart  />
          </Paper>
        </Grid>

      </section>

      <Container maxWidth="lg" >
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={utilStyles.chartStyle} >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={utilStyles.chartStyle}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={utilStyles.chartStyle}>
              <Orders />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={6}>
            <Paper className={utilStyles.chartStyle}>
              <Orders1 />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={6} md={6} lg={6}>
            <Paper className={utilStyles.chartStyle}>
              <Chart1 />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
