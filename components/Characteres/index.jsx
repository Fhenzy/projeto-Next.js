import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box, Button, TextField } from '@mui/material';
import api from '../Services/api'
import { useEffect, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  root: {
    '&:hover' : {
      height: 220,
    }
  }
  });

export default function Cards() {
    
    const classes = useStyles();
    const [char, setChar] = useState([]);
    const [busca, setBusca] = useState([]);

    useEffect(() => {
      const params = {};
      if (busca) {
        params.name = busca;
      }
        api.get('/characters', { params })
        .then(rs => { setChar(rs.data.data.results)})
        .catch(err => console.log(err))
        },[busca]);

        const handleMore = useCallback( async () => {
          try{
              const offset = char.length;
              const rs = await api.get(`characters`,{
                  params: {
                      offset: offset,
                 },
              });
              setChar([...char, ...rs.data.data.results])
            }
         catch(err){console.log(err)}
        }, [char])

  return (
    <Box sx={{marginTop: 13, height: '100%',}}>
      <Box sx={{display: 'flex', justifyContent: 'center',}}>
      <TextField label="Buscar" 
                 type="search"
                 sx={{width: 335,}}
                 onChange={(e) => setBusca(e.target.value)}
                 value={busca}>
      </TextField>
      </Box>
      <Grid container sx={{height: '100%', width: '100%', marginLeft: 5,}}>
        {char.map(chars => (
        <Grid item key={chars.id} lg={4} md={4} sm={6} xs={12} sx={{height: 440, overflow: 'hidden', paddingTop: 5,}}>
          <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>     
              <CardMedia classes={{root: classes.root}}
                        component="img"
                        height="350"
                        image={`${chars.thumbnail.path}.${chars.thumbnail.extension}`}
                        alt="Foto do personagen"
              />       
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {chars.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {chars.description}
              </Typography>
              </CardContent>
              </CardActionArea>
          </Card>         
        </Grid>
        ))}
      </Grid>  
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 3,}} >
      <Button onClick={handleMore} variant="contained" color="error" >
        ver mais
      </Button>
      </Box>   
    </Box>
);
}
