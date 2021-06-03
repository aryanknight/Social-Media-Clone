import { Container,Grow ,Grid , useMediaQuery} from '@material-ui/core';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import React , {useState , useEffect} from 'react'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import './Home.css'


const theme = createMuiTheme();

export default function Home() {
    const userInfo=JSON.parse(localStorage.getItem('User'));
    const [gridDirn , setgridDirn]=useState('row-reverse');
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const matches_1 = useMediaQuery(theme.breakpoints.up('lg'));
    
    useEffect(()=>{
        if(matches || matches_1){
            setgridDirn('row');
        }else{
            setgridDirn('row-reverse');
        }
    },[matches]);
    
    return (
    <Grow in>
        <main>
        <ThemeProvider theme={theme}>
            <Container >
                <Grid container spacing={3} direction='row-reverse' >
                    <Grid item xs={12} md={4}>
                        <Form/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Posts/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>    
       </main>
    </Grow>
    );
}
