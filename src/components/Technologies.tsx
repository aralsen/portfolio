import React from 'react';
import { Box, Grid, Paper, Link } from '@mui/material';
import { motion } from 'framer-motion';
import efcore from '../assets/ef.png';

const technologies = [
  { name: 'Java', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', url: 'https://www.java.com/' },
  { name: 'Spring Boot', image: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg', url: 'https://spring.io/projects/spring-boot' },
  { name: 'C#', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'ASP.NET Core', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg', url: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
  { name: 'Entity Framework Core', image: efcore, url: 'https://docs.microsoft.com/en-us/ef/core/' },
  { name: 'Python', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', url: 'https://www.python.org/' },
  { name: 'Django', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg', url: 'https://www.djangoproject.com/' },
  { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org/' },
  { name: 'MS SQL Server', image: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads' },
  { name: 'MySQL', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', url: 'https://www.mysql.com/' },
  { name: 'JavaScript', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', url: 'https://reactjs.org/' },
  { name: 'HTML', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Microsoft Azure', image: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg', url: 'https://azure.microsoft.com/en-us/' },
  { name: 'AWS', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com/' },
  { name: 'Docker', image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', url: 'https://www.docker.com/' },
  { name: 'Git', image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', url: 'https://git-scm.com/' },
];

const TechnologyGrid: React.FC<{ technologies: { name: string; image: string; url: string }[] }> = ({ technologies }) => (
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
              <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                <motion.img 
                  src={tech.image} 
                  alt={tech.name} 
                  style={{ width: '50px', height: '50px', objectFit: 'contain', cursor: 'pointer' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </Link>
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
      <TechnologyGrid technologies={technologies} />
    </Box>
  );
};

export default Technologies;