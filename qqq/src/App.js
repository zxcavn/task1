import './App.css';
import React from 'react';
import { AppBar, Container, IconButton, Button, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/RecentActors';
import { Route, Routes, Link } from 'react-router-dom';
import { About } from './Pages/About';
import { Skills } from './Pages/Skills';
import { Contacts } from './Pages/Contacts';
import AdbIcon from '@material-ui/icons/LinkedIn';
import AddIcon from '@material-ui/icons/Twitter';
import EuroIcon from '@material-ui/icons/YouTube';
import ErrorIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#3f51b5',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
            <IconButton color="inherit" component={Link} to="/">
              <MenuIcon />
            </IconButton>

            <Button color="inherit" component={Link} to="/about">О себе</Button>
            <Button color="inherit" component={Link} to="/skills">Навыки</Button>
            <Button color="inherit" component={Link} to="/contacts">Контакты</Button>

          </Toolbar>

        </Container>
      </AppBar>

      <div className={classes.content}>
        <Routes>
          <Route path='/' element={
            <main>
              <div>
                <Container maxWidth="sm">
                  <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '90px' }}>Web Blog</Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>Develop essential blockchain tools: Grant ideas can include Oracles, Payment Systems, Subscription Services, Storage Solutions, Distributed Ledgers, Cross Border Payments, Data Analytics Platforms, Wallet technologies and more.</Typography>
                </Container>
              </div>
            </main>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </div>

      <footer className={classes.footer} >
        <Typography variant="h6" align='center' gutterBottom>Web Blog</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <IconButton color="black">
              <AdbIcon />
            </IconButton>
          </a>
          <a href="https://twitter.com/VladAar125135" target="_blank" rel="noopener noreferrer">
            <IconButton color="black">
              <AddIcon />
            </IconButton>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <IconButton color="black">
              <EuroIcon />
            </IconButton>
          </a>
          <a href="https://github.com/zxcavn" target="_blank" rel="noopener noreferrer">
            <IconButton color="black">
              <ErrorIcon />
            </IconButton>
          </a>
        </div>
        <Typography align='center' color="textSecondary">Web Developer Blog CO.</Typography>
      </footer>
    </div>
  );
}

export default App;


const Home = () => {
  return(
      <div>
          
      </div>
  )
}

export {Home};