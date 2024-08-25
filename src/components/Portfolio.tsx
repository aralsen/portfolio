import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import equmasdemo from '../assets/equmas-demo.webp';
import { Link } from '@mui/material';
import equmas from '../assets/equmas.png';
import innovatist from '../assets/innovatist.png';
import valuag from '../assets/valuag.png';
import taskly1 from '../assets/taskly1.jpeg';
import taskly2 from '../assets/taskly2.jpeg';
import taskly3 from '../assets/taskly3.jpeg';
import taskly4 from '../assets/taskly4.jpeg';
import taskly5 from '../assets/taskly5.jpeg';
import taskly6 from '../assets/taskly6.jpeg';
import taskly7 from '../assets/taskly7.jpeg';
import taskly8 from '../assets/taskly8.jpeg';


const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Derouge',
      link: 'https://273.media/derouge/',
      images: [valuag],
      technologies: [
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
        { name: 'Spring Boot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'React Native', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Swift', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg' },
      ],
      description: 'During my free-time and weekends I am helping my friend build a mobile app for his startup. We are using React Native and Expo for Android and SwiftUI for iOS. Responsibilities include frontend implementation and backend code review, leveraging my full-stack expertise to ensure code quality and architectural consistency.'
    },
    {
      title: 'EQUMAS Quality Management System',
      images: [equmas, equmasdemo], 
      technologies: [
        { name: 'ASP.NET Core', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'Javascript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Entity Framework Core', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg' },
        { name: 'SQL Server', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'Microsoft Azure', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
      ],
      description: 'Leading the full-stack development using ASP.NET Core, React, and RESTful APIs.'
    },
    {
      title: 'Innovatist Data Hub',
      images: [innovatist],
      technologies: [
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
        { name: 'Spring Boot', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
        { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
        { name: 'GitHub Actions', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
      ],
      description: 'Developed a project for processing time-series data from IIoT sources. Engineered an OPC UA Event Subscriber using Eclipse Milo and Java Spring Boot.',
    },
    {
      title: 'Taskly',
      images: [taskly1, taskly2, taskly3, taskly4, taskly5, taskly6, taskly7, taskly8],
      technologies: [
        { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
        { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
        { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
      ],
      description: 'A task management system built with Django using MVC architecture, featuring user authentication, rate-limiting, and CRUD functionality for both tasks and users. Containerized with Docker for easy deployment and scalability.',
      githubLink: 'https://github.com/aralsen/django-projects/tree/main/Taskly',
    },
    {
      title: 'ValuAg Web Application',
      images: [valuag],
      technologies: [
        { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
        { name: 'WordPress', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg' },
        { name: 'AWS EC2', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'AWS RDS MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
      ],
      description: 'Helped the development of a dynamic web application to digitize internal quality metric forms. Implemented using HTML, PHP, WordPress, and AWS services.',
    },
  ];

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
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
          My Portfolio
        </Typography>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon sx={{ color: 'black' }} />}
          href="https://github.com/aralsen"
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
          View my GitHub
        </Button>
      </Box>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
              >
                {project.images.map((image, imgIndex) => (
                  <SwiperSlide key={imgIndex}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                      <img 
                        src={image} 
                        alt={`${project.title} screenshot ${imgIndex + 1}`} 
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '100%', 
                          objectFit: 'contain' 
                        }} 
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.link ? (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      sx={{ 
                        color: 'primary.main', 
                        fontWeight: 'bold',
                        textDecoration: 'none', 
                        '&:hover': { 
                          textDecoration: 'underline' 
                        } 
                      }}
                    >
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech, techIndex) => (
                    <Box key={techIndex} title={tech.name} sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                      <img src={tech.icon} alt={tech.name} style={{ width: 24, height: 24, marginRight: 4 }} />
                      <Typography variant="caption">{tech.name}</Typography>
                    </Box>
                  ))}
                </Box>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              {project.githubLink && (
                <CardActions>
                  <Button 
                    size="small" 
                    startIcon={<GitHubIcon />} 
                    component={Link} 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;