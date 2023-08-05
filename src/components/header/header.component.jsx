import { Box, Container, Typography } from "@mui/material";
import HeaderImage from '/src/assets/dark-header.jpg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { keyframes } from '@emotion/react';


const Header = () =>
{

  const bounceAnimation = keyframes({
    '0%': { bottom: '5px' },
    '25%, 75%': { bottom: '15px' },
    '50%': { bottom: '20px' },
    '100%': { bottom: 0 },
  });

  const onClick = () =>
  {
    window.scrollTo(window.scrollX, 830);

  };

  return (

    <Box id={'home'} sx={{
      backgroundImage: `url(${HeaderImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',

    }}>
      <Box minHeight='100vh' display='flex' justifyContent='center' alignItems='center'>
        <Container maxWidth='md'>
          <Box data-aos='zoom-out' data-aos-easing='linear' data-aos-duration='2000' data-aos-delay='2000'>
            <Typography align="center" color='white' variant="h3">
              <span style={{
                fontFamily: 'monospace',
                fontSize: 95, color: 'cyan',
              }}>J</span>ayniel <span style={{
                fontFamily: 'monospace',
                fontSize: 95, color: 'cyan'
              }}>S</span>ingh
            </Typography>
          </Box>
          <Typography data-aos='zoom-in' data-aos-easing="linear"
            data-aos-duration="1500" align="center" color='white' variant="h6">
            A full-stack <span style={{
              fontFamily: 'monospace',
              fontSize: 30,
              color: 'cyan'
            }} >mern</span> stack developer
          </Typography>
          <Box sx={{ color: "white", display: 'flex', justifyContent: 'center', }}>
            <ArrowDownwardIcon onClick={onClick} fontSize="large" sx={{
              position: 'absolute',
              left: '50%',
              bottom: 0,
              color: 'turquoise',
              transform: 'translateX(-50%)', // Center horizontally
              height: '50px',
              width: '50px',
              animation: `${bounceAnimation} 1s infinite`,
            }} />
          </Box>
        </Container>
      </Box>
    </Box >
  );
};

export default Header;