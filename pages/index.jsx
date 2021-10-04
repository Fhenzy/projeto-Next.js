import Cards from '../components/Characteres' ;
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import Head from 'next/head';

export default function Menu() {
  return (
     <Container maxWidth='xl' sx={{height: '100%',}} className="diego">
       <Head>
         <meta charSet='utf-8'/>
         <title>Projeto cards marvel by diego silva</title>
       </Head>
       <Navbar/>
       <Cards /> 
     </Container>
  );
}

