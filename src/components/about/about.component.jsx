import { Box, Button, Container, Typography } from "@mui/material";
import AboutImage from '../../assets/about-pic-1.png';

const About = () =>
{
  return (
    <Box sx={{
      backgroundColor: 'black',
      // display: 'flex',
      // backgroundImage: `url(${TextureBg})`,
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // width: '100%',
      height: '100vh',
      p: 5


    }}>
      <Container maxWidth="md">
        <Box data-aos="fade-in"
          data-aos-offset="300"
          data-aos-delay='400'
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            backgroundImage: `url(${AboutImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: { xs: '200px', sm: '350px', md: '500px' },
            width: { xs: 250, sm: 500, md: 600, lg: 750 }
          }} />
        <Box data-aos="fade-in"
          data-aos-offset="300"
          data-aos-delay='500'
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine" sx={{
            pt: 5,
          }}>
          <Typography p={1} variant="h4" align="center" color={'turquoise'}>
            About Me
          </Typography>
          <Typography py={2} variant="h5" align="center" color='snow'>
            Hi I&#39;m Jayniel Singh, a self taught Full-Stack Developer.  My journey started during the covid pandemic, i had a lot of time on my hand and decided to start learning Python.  After learning Python/Flask, i found out i had more interest in making web applications, so I decided to learn the MERN Stack. While i have came this far, there is still more to learn and better hone my skills.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;