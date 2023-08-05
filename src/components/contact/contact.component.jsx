import { Box, Button, Container, Typography } from '@mui/material';
import ContactBg from '../../assets/contact-bg-1.jpg';
// import ContactImage from '../../assets/contact-bg.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () =>
{
  return (
    <Box sx={{
      backgroundColor: 'black',
      backgroundImage: `url(${ContactBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    }}>
      <Container maxWidth='md'>
        {/* <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          backgroundImage: `url(${ContactImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '500px',
          width: 'auto'
        }} /> */}
        <Box sx={{ py: 10 }}>
          <Typography color='white' variant='h6'>
            Looking forward to hearing from you
          </Typography>
          <Box sx={{ color: 'white', pt: 2, display: 'flex', flexDirection: 'row' }}>
            <Typography color={'white'} m={1} variant='h7'>
              Phone Number:
            </Typography>
            <Button href='tel: 510-415-8251'>
              <Typography variant='h7' color='white'>
                510. 415. 8251
              </Typography>
            </Button>
          </Box>
          <Box sx={{ color: 'white', display: 'flex', flexDirection: 'row' }}>
            <Typography color={'white'} m={1} variant='h7'>
              Email:
            </Typography>
            <Button href='mailto:jaynielsingh@yahoo.com'>
              <Typography variant='h7' color='white'>
                jaynielsingh@yahoo.com
              </Typography>
            </Button>
          </Box>
          <Box sx={{
            p: 5,
          }}>
            <Button sx={{ color: 'turquoise' }} href='https://github.com/jaynielsingh' >
              <GitHubIcon fontSize='large' />
            </Button>
            <Button sx={{ color: 'turquoise' }} href='https://www.linkedin.com/in/jayniel-singh-3a169697/' >
              <LinkedInIcon fontSize='large' />
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;