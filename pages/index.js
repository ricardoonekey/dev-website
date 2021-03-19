import { Box, Main, Heading, Paragraph } from 'grommet'
import Head from 'next/head'
import React from 'react'
import fs from 'fs'
import path from 'path'
import ProjectCard from '../components/project-card'
import styles from '../styles/index.module.css'

export async function getStaticProps(context) {
  const fileName = path.join(process.cwd(), 'data/projects.json')
  const data = JSON.parse(fs.readFileSync(fileName, 'utf-8'))

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  return (
    <React.Fragment>
      <Head>
        <title>Devs @ OneKey</title>
        <meta name="description" content="Showcase of multiple software projects which mainly focus on communications solutions. 
        Projects use technology like Avaya CPaaS."/>
      </Head>
      <Main>
        <Box className={styles.titleContainer}>
          <Box>
            <Heading level={1} size="large" textAlign="center" className={styles.title}>
              Developers @ OneKey
            </Heading>
          </Box>
          <Box align="center" pad={{"vertical": "small", "horizontal": "large"}}>
            <Heading level={2} size="small" textAlign="center">
              We built this website to share our projects/tests with the community.
              Feel free to check them out and share any feedback/comments, we'd love to
              hear from you!
            </Heading>
          </Box>
        </Box>
        <Box pad={{"vertical": "small", "horizontal": "large"}}>
          <Heading color="light-1" size="large" level={3}>Projects</Heading>
          {data.projects.map(project => (
            <ProjectCard key={project.title} {...project}/>
          ))}
        </Box>
      </Main>
    </React.Fragment>
  )
}