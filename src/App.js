import React from 'react';
import { Typography, Box, Paper, Divider } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0ecff, #f0f4ff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, sm: 4 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: { xs: 3, sm: 5 },
          maxWidth: 700,
          width: '100%',
          borderRadius: '20px',
          textAlign: 'center',
          background: 'white',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        <RocketLaunchIcon sx={{ fontSize: 60, color: '#3f51b5', mb: 1 }} />
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#3f51b5',
          }}
        >
          Pipeline Testing
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="h6"
          sx={{
            color: '#555',
            fontWeight: 400,
          }}
        >
          Seamless connection with <strong>Git</strong>, <strong>Netlify</strong>, and <strong>Jenkins</strong> for a powerful CI/CD pipeline setup.
        </Typography>
      </Paper>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}

export default App;
