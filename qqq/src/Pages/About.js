import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const About = () => {
    const cards = [
        { id: 1, title: 'Web Blog 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo sit amet libero vehicula venenatis nec in ligula.' },
        { id: 2, title: 'Web Blog 2', description: 'Nulla facilisi. Sed nec tristique lorem, ac fringilla metus. Duis volutpat libero ac mi fermentum, id consectetur dolor condimentum.' },
        { id: 3, title: 'Web Blog 3', description: 'Vestibulum tincidunt metus ac ex condimentum, nec facilisis ex feugiat. Aenean pretium eros nec nibh mattis volutpat.' },
    ];

    const [openDialog, setOpenDialog] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickOpen = (card) => {
        setSelectedCard(card);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <main>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '90px' }}>About us</Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={7} md={4}>
                                <Card>
                                    <CardMedia image="https://source.unsplash.com/random" title="image" style={{ height: 0, paddingTop: '100%' }}>
                                    </CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" align="center">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                                        <Button variant="contained" color="primary" onClick={() => handleClickOpen(card)}>
                                            Go Go
                                        </Button>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>{selectedCard && selectedCard.title}</DialogTitle>
                <DialogContent>
                    <CardMedia image="https://source.unsplash.com/random" title="image" style={{ height: 0, paddingTop: '56.25%' }} />
                    <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'15px'}}>
                        {selectedCard && selectedCard.description}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    );
}

export { About };
