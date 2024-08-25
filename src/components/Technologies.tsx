import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import efcore from '../assets/ef.png';

const technologies = [
  { name: 'Java', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { name: 'Spring Boot', image: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
  { name: 'C#', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
  { name: 'ASP.NET Core', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Entity Framework Core', image: efcore },
  { name: 'Python', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'Django', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
  { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  { name: 'MS SQL Server', image: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
  { name: 'MySQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'HTML', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
  { name: 'Microsoft Azure', image: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg' },
  { name: 'AWS', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'Git', image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
];

const TechnologyGrid: React.FC<{ technologies: { name: string; image: string }[] }> = ({ technologies }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Grid container spacing={2}>
      {technologies.map((tech, index) => (
        <Grid item xs={4} sm={3} md={2} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: 'center',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.img 
                src={tech.image} 
                alt={tech.name} 
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '4px',
                }}
              >
                {tech.name}
              </motion.div>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </motion.div>
);

const Technologies: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Typography 
        variant="h2" 
        sx={{
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '3.75rem' },
          background: 'linear-gradient(45deg, #000000 30%, #4a4a4a 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
          marginBottom: '2rem',
        }}
      >
        Technologies
      </Typography>
      <TechnologyGrid technologies={technologies} />
    </Box>
  );
};

export default Technologies;