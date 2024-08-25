import React, { useRef } from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/system';

import Home from './components/Home.tsx';
import Portfolio from './components/Portfolio.tsx';
import Technologies from './components/Technologies.tsx';
import Footer from './components/Contact.tsx';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const homeRef = useRef(null);
  const portfolioRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const yOffset = -64;
    const element = ref.current;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection(homeRef)}
              sx={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                '& span': {
                  animation: `${blink} 1.5s linear infinite`,
                },
              }}
            >
              /home/aralsen<span>_</span>
            </Button>
            {!isMobile && (
              <>
                <Button color="inherit" onClick={() => scrollToSection(portfolioRef)}>
                  Portfolio
                </Button>
                <Button color="inherit" onClick={() => scrollToSection(technologiesRef)}>
                  Technologies
                </Button>
                <Button color="inherit" onClick={() => scrollToSection(contactRef)}>
                  Contact
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This empty Toolbar acts as a spacer */}
      <Container maxWidth="lg">
        <Box sx={{ minHeight: '100vh', pt: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} ref={homeRef}>
          <Home />
        </Box>
        <Box sx={{ minHeight: '80vh', pt: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} ref={portfolioRef}>
          <Portfolio />
        </Box>
        <Box sx={{ minHeight: '80vh', pt: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} ref={technologiesRef}>
          <Technologies />
        </Box>
        <Box sx={{ pt: 4, pb: 4 }} ref={contactRef}>
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;