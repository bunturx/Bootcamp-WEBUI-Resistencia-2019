//parte grafica
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    paperRating: {
        marginTop:10
    }
  }));

  const infoMovie = props => {
    const { info } = props;}
    
 const classes = useStyles();
    return(<Grid container  className={classes.root} spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><h1>{info.Title}</h1></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <img src={info.Poster === 'N/A' ? sinImagen:info.Poster} height={450} width={300}/>
                    </Paper>
                    <Paper className={classes.paperRating}>
                        <h2> <bl>Rating</bl> </h2>
                        <Rating precision={0.5}  value={Number(info.imdbRating)} max={10} readOnly emptyIcon={<StarBorderIcon fontSize="inherit" />} />

                    </Paper>
                     
                </Grid>
                
                
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h2> <bl>Sipnosis</bl>  </h2>  
                            <p>{info.Plot}</p>
                        <h2 > characteristics</h2>
                            <p>Rated:{info.Rated}</p>
                            <p>Released:{info.Released}</p>
                            <p>Runtime:{info.Runtime}</p>
                            <p>Genre:{info.Genre}</p>
                            <p>Director:{info.Director}</p>
                            <p>Writer:{info.Writer}</p>
                            <p>Actors:{info.Actors}</p>
                            <p>Language:{info.Language}</p>
                            <p>Country:{info.Country}</p>
                            <p>Awards:{info.Awards}</p>
                            <p>Website:{info.Website}</p>
                            <p>Type:{info.Type}</p>
                            <p>DVD:{info.DVD}</p>
                            <p>BoxOffice:{info.BoxOffice}</p>
                            <p>Production:{info.Production}</p>
                    </Paper>
                </Grid>            
                
     </Grid>
    )
}

export default infoMovie;