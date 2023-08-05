// SkillBar.js
import { Box, LinearProgress, Typography } from '@mui/material';

const SkillBar = ({ skillName, percentage }) =>
{
  return (
    <Box
      data-aos="fade-"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      sx={{
        marginBottom: 2,
        position: 'relative',

      }}
    >
      <Typography
        variant="h7"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          color: 'turquoise',
          zIndex: 1,

        }}
      >
        {skillName}
      </Typography>
      <Typography color='cyan' align='end' variant="body1" gutterBottom sx={{ m: 1 }}>
        {percentage}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          borderRadius: 5,
          backgroundColor: 'turquoise',

          mt: 2,

        }}
      />

    </Box>
  );
};

export default SkillBar;
