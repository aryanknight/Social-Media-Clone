import { Container,Grow ,Grid} from '@material-ui/core'
import React from 'react'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import './Home.css'

export default function Home() {
    const userInfo=JSON.parse(localStorage.getItem('User'));
    return (
    <Grow in>
        <main>
            <Container >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
       </main>
    </Grow>
    );
}
