import React from 'react';
import { Paper, Container, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    height: 'calc(100vh - 64px - 56px)', 
    display: 'flex',
    color: 'white',
    background: `url(https://sun9-79.userapi.com/impg/rJaE2h0X7NpUWvFZTRUaB5ogwlrsClJh2UzLgA/BiXUt9siUNA.jpg?size=604x268&quality=96&sign=49a03bee053084ddf2dbeada333bd148&type=album) no-repeat center center`,
    backgroundSize: 'cover'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container fixed className={classes.container}>
        <Typography variant="h2" align="center">
          Skills
        </Typography>
      </Container>
    </Paper>
  );
}

export { Skills };

