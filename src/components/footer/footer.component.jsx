import { Box, Container, Link, Typography } from "@mui/material";


const Footer = () =>
{
  return (
    <Box sx={{ backgroundColor: 'black' }}>

      <Container maxWidth='sm'>
        <Typography  p={2} variant="body2" color='turquoise' align="center">
          {'Copyright © '}
          <Link color="inherit" href="/">
            Jayniel Singh
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;