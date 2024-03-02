import React, { useState } from 'react';
import { Container, Typography, Button, Modal, TextField, useMediaQuery, useTheme } from '@material-ui/core';

const Contacts = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setEmail('');
        setNumber('');
        setOpenModal(false);
    };

    const handleSendInformation = () => {
        console.log("Email:", email);
        console.log("Number:", number);
        setOpenModal(false);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{ marginTop: '90px' }}>Contacts</Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '90px' }}>
                <Button variant="contained" color="primary" onClick={handleOpenModal}>
                    Send Information
                </Button>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={{
                    position: 'absolute',
                    width: isMobile ? '90%' : 400,
                    backgroundColor: 'white',
                    padding: 20,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                }}>
                    <Typography variant="h6" id="modal-title">
                        Enter Information
                    </Typography>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ marginTop: '20px' }}>
                        <Button variant="contained" color="secondary" onClick={handleCloseModal} style={{ marginRight: '10px' }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSendInformation}>
                            Send
                        </Button>
                    </div>
                </div>
            </Modal>
        </Container>
    );
}

export { Contacts };
