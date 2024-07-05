import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import PostList from '../Components/PostList';
import DepartmentList from '../Components/DepartmentList';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      alert('You must enter your details before accessing this page.');
      navigate('/');
    }
  }, [navigate]);

  return (
    <Container>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom color='white'>
          Welcome to Home Page
        </Typography>
        <Typography variant="body1" color='#B4B4B9'>
          You have successfully submitted your information.
        </Typography>
        <PostList/>
        <DepartmentList/>
      </Box>
    </Container>
  );
};

export default Home;
