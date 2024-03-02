import React from 'react';
import { Paper, Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
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
  list: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    textAlign: 'center'
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container fixed className={classes.container}>
        <div className={classes.list}>
          <Typography variant="h2" align="center" gutterBottom>
            Skills
          </Typography>
          <List>
            <ListItem>
            <a href="https://learn.javascript.ru/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="JavaScript" style={{color:'#FFFFFF'}} />
              </a>
            </ListItem>
            <ListItem>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="ReactJS" style={{color:'#FFFFFF'}} />
              </a>
            </ListItem>
            <ListItem>
            <a href="https://htmlbook.ru/html5" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="HTML5" style={{color:'#FFFFFF'}} />
              </a>
            </ListItem>
            <ListItem>
            <a href="https://htmlbook.ru/css3" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="CSS3" style={{color:'#FFFFFF'}} />
              </a>
            </ListItem>
            <ListItem>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Redux" style={{color:'#FFFFFF'}} />
              </a>
            </ListItem>
            <ListItem>
            <a href="https://redux-saga.js.org/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Redux-saga"  style={{color:'#FFFFFF'}}/>
              </a>
            </ListItem>
            <ListItem>
            <a href="https://mui.com/material-ui/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Material-UI"  style={{color:'#FFFFFF'}}/>
              </a>
            </ListItem>
            <ListItem>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Postman" style={{color:'#FFFFFF'}}/>
              </a>
            </ListItem>
          </List>
        </div>
      </Container>
    </Paper>
  );
}

export { Skills };
