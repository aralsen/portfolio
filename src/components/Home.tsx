import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Typewriter from 'typewriter-effect';
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

  const codeString = `const aral = {
  role: "Full-Stack Software Engineer",
  location: "Philadelphia, PA, USA",
  education: {
    university: [
      "Binghamton University",
      "Istanbul Technical University"
    ],
    degree: [
      "B.S. Computer Science",
      "B.S. Information Systems Engineering"
    ],
    award: [
      "Mine Kalkan Academic Excellence Award",
      "Dean's List"
    ]
  },
  skills: [
    "Web Development",
    "Performance Optimization",
    "High-Quality Code",
    "Impactful Solutions"
  ]
};

// Delivering business value through code`;

  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              color: '#000000',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            Hi, I'm <span style={{ color: '#2196F3' }}>Aral</span>
          </Typography>
          <Box sx={{ 
            fontFamily: 'monospace', 
            fontSize: { xs: '1.2rem', md: '1.5rem' }, 
            color: '#757575', 
            marginBottom: '1rem',
            height: '2em',
          }}>
            <Typewriter
              options={{
                strings: ['Software Engineer at EQUMAS', 'Full-Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <Box 
            sx={{ 
              borderRadius: '8px',
              marginBottom: '1.5rem',
              position: 'relative',
              maxWidth: '100%',
              '&::before': {
                content: '"// About Me"',
                position: 'absolute',
                top: '0.5rem',
                left: '1rem',
                color: '#abb2bf',
                fontSize: '0.8rem',
                zIndex: 1,
              }
            }}
          >
            <SyntaxHighlighter 
              language="javascript" 
              style={atomOneDark}
              customStyle={{
                padding: '1.5rem 1rem 1rem',
                fontSize: '0.75rem',
                lineHeight: 1.4,
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                background: '#282c34'
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
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
              marginBottom: 3,
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/aralsen"
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonStyle}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/aralsen"
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonStyle}
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
              sx={buttonStyle}
            >
              Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;