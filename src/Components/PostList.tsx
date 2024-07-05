import React, { useEffect, useState } from 'react';
import { Post } from './types';
import { Container, Box, CircularProgress, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" sx={{ mt: 5 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userId', headerName: 'User ID', width: 130 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 400 },
  ];

  return (
    <Container sx={{ marginTop: '2rem', height: 600 }} >
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, color:"white"}}>
        Posts
      </Typography>
      <Box sx={{ height: '100%', width: '100%'}}>
        <DataGrid rows={posts} columns={columns}  checkboxSelection sx={{
            '& .MuiDataGrid-row': {
                color: '#B4B4B9',
            },
            '& .MuiCheckbox-root': {
                color: '#B4B4B9',
            },
            }}/>
      </Box>
    </Container>
  );
};

export default PostList;
