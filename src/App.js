import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Pipeline from './Pipeline';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f4ff, #e0ecff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 900,
          width: '100%',
          borderRadius: 4,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#3f51b5',
            marginBottom: 3,
          }}
        >
          🚀 Pipeline Dashboard
        </Typography>

        <Pipeline />
      </Paper>
    </Box>
  );
}

export default App;
