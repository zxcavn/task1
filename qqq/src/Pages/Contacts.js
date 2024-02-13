import React from 'react';
import {Container, Typography} from '@material-ui/core'

const Contacts = () => {
    return(
        <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '90px' }}>Contacts</Typography>
       
      </Container>
    )
}

export {Contacts};