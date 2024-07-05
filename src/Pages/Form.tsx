import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && phone && email) {
            localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
            navigate('/home');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <Container sx={{
            boxShadow:'0 0 25px black',
            width: "26%", 
            padding: "20px",
            margin:'auto',
            marginTop:'5rem', 
            backgroundColor: 'black',
            '@media (max-width:600px)': {
            width: '90%', 
            },
        }}>
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h5" component="h1" gutterBottom sx={{color:"white"}}>
                    User Information Form
                </Typography>
                <TextField
                    label="Name"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                        marginTop: "2rem",
                        borderBottom: "1px solid #B4B4B9",

                        '& .MuiInputLabel-root': {
                            color: '#B4B4B9',
                            fontSize:"15px"
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none', 
                                outline:'none'
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            color: '#B4B4B9',
                            '&:-webkit-autofill': {
                                WebkitBoxShadow: '0 0 0 100px black inset',
                                WebkitTextFillColor: '#B4B4B9',
                                border:'none',
                               
                            },
                        },
                    }}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{
                        marginTop: "2rem",
                        borderBottom: "1px solid #B4B4B9",

                        '& .MuiInputLabel-root': {
                            color: '#B4B4B9',
                            fontSize:"15px"
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none'
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            color: '#B4B4B9',
                            '&:-webkit-autofill': {
                                WebkitBoxShadow: '0 0 0 100px black inset',
                                WebkitTextFillColor: '#B4B4B9',
                                border:'none'
                            },
                        },
                    }}
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        marginTop: "2rem",
                        borderBottom: "1px solid #B4B4B9",
                        '& .MuiInputLabel-root': {
                            color: '#B4B4B9',
                            fontSize:"15px" 
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: 'none', // Remove border
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            color: '#B4B4B9',
                            '&:-webkit-autofill': {
                                WebkitBoxShadow: '0 0 0 100px black inset',
                                WebkitTextFillColor: '#B4B4B9',
                                border:'none'
                            },
                        },
                    }}
                />
                
                <Button type="submit" variant="outlined" color="primary" fullWidth sx={{ mt: 6 }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Form;
