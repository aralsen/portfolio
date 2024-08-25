import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import aralImage from '../assets/aral.png';
import aralResume from '../assets/Aral_Sen_Resume.pdf';

const Home: React.FC = () => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
    borderWidth: 2,
    fontWeight: 'bold',
    textTransform: 'none',
    padding: '8px 16px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    },
    '&:active': {
      backgroundColor: 'white',
      color: 'black',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
      marginRight: '8px',
    },
    '&:hover .MuiSvgIcon-root': {
      color: 'white',
    },
    '&:active .MuiSvgIcon-root': {
      color: 'black',
    },
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm <span style={{ color: '#2196F3' }}>Aral</span>
          </Typography>
          <Typography variant="h5" gutterBottom>
            Software Engineer at <a href="https://equmas.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2196F3', textDecoration: 'none' }}>EQUMAS</a>
          </Typography>
          <Typography variant="body1" paragraph>
            Full-stack developer with experience in ASP.NET Core, React, and AWS. Passionate about building efficient and scalable applications.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/aralsen"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...buttonStyle, mr: 2, mb: 2 }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/aralsen"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...buttonStyle, mr: 2, mb: 2 }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              href={aralResume}
              target="_blank"
              rel="noopener noreferrer"
              download="Aral_Sen_Resume.pdf"
              sx={{ ...buttonStyle, mb: 2 }}
            >
              Resume
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aralImage}
            alt="Aral Sen"
            sx={{
              width: '100%',
              maxWidth: 400,
              height: 'auto',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;