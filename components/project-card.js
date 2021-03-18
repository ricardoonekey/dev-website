import { Box, Button, Card, CardFooter, Heading } from 'grommet'
import { Github } from 'grommet-icons'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/project-card.module.css'

export default function ProjectCard(props) {
    return (
        <Card background="light-2" margin="small" pad={{"vertical": "small", "horizontal": "medium"}}>
            <Box className={styles.cardHeader}>
                <Heading level={4}>{props.title}</Heading>
                <Heading level={5} size="small">{`Uses: ${props.technology}`}</Heading>
            </Box>
            <Box>
                {props.description}
            </Box>
            <CardFooter className={styles.cardFooter}>
                {
                    props.link !== undefined ? <Link href={props.link}>
                        <Button primary label="Try it"/>
                    </Link> : <React.Fragment/>
                }
                <a href={props.githubLink} target="_blank">
                    <Button>
                        <Github/>
                    </Button>
                </a>
            </CardFooter>
        </Card>
    )
}