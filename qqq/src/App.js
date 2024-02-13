import './App.css';
import React from 'react';
import {AppBar, Container, IconButton, Button, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/RecentActors'
import {Route, Routes, Link} from 'react-router-dom'
import {About} from './Pages/About'
import {Skills} from './Pages/Skills'
import {Contacts} from './Pages/Contacts'






function App() {

  return (
<>
    <AppBar position='fixed'>
      <Container fixed>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
          <IconButton color="inherit" component={Link} to="/home">
          <MenuIcon />
          </IconButton>
          
          <Button color="inherit" component={Link} to="/about">О себе</Button>
          <Button color="inherit" component={Link} to="/skills">Навыки</Button>
          <Button color="inherit" component={Link} to="/contacts">Контакты</Button>
          
        </Toolbar>
      
      </Container>
    </AppBar>



    <Routes>
        <Route path='/home' element={
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
    </>
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