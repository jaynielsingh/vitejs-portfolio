
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




function NavBar()
{
  return (
    <AppBar sx={{ backgroundColor: 'black' }} position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              m: 4,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'snow',

              textDecoration: 'none',
            }}
          >
            Jayniel
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;