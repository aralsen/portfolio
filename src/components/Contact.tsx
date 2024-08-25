import React from 'react';
import { Typography, Button, Box, Link, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
  return (
    <Box>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Typography 
            variant="h2" 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              background: 'linear-gradient(45deg, #000000 30%, #4a4a4a 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            component={Link}
            href="https://www.linkedin.com/in/aralsen"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
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
            }}
          >
            Connect with me on LinkedIn
          </Button>
        </Grid>
        <Grid item>
          <Link
            href="mailto:aralsen17@gmail.com"
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#2196F3',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <EmailIcon sx={{ mr: 1 }} />
            <Typography variant="body1">
              aralsen17@gmail.com
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;