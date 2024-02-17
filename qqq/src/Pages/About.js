import React from 'react';
import {Container, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/RecentActors'

const About = () => {
    const cards = [1,2,3,4,5,6,7,8,9];
    
    return(
     <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '90px' }}>About us</Typography>
         <Grid container spacing={8} justifyContent="center">
         
                {cards.map((cards) =>(
                    <Grid item key={cards} xs={12} sm={6} md={4} >
                        <Card>
                            <CardMedia image="https://source.unsplash.com/random" title="image" style={{ maxWidth: '100%', Height: '100%', objectFit: 'cover' }}>
                                <CardContent>
                                
    
                                </CardContent>
                               
                                
                                
                            </CardMedia>
                                <Typography variant="h5" align='center'>
                                    Web Blog
                                </Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button color="primary">Go Go</Button>
                                <IconButton color="inherit">
          <MenuIcon /></IconButton>
                                </div>
                        </Card>

                    </Grid>
                ))}
          
         </Grid>
        </Container>
      </div>
    </main>
    )
}

export {About};