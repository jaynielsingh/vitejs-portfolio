import { Box, Container, Typography } from "@mui/material";
// import SkillsBg from '../../assets/dark-wave.jpg';

import SkillBar from "../common/skillBar/skillBar.component";
// import SkillCard from "../common/skillCards/skillCard.component";


const Skills = () =>
{
  const skills = [
    { name: 'HTML', percentage: 90, },
    { name: 'CSS', percentage: 90, },
    { name: 'JavaScript', percentage: 75, },
    { name: 'Python', percentage: 75, },
    { name: 'React.Js', percentage: 75, },
    { name: 'Material UI / Bootstrap', percentage: 75 },
    { name: 'Node.Js', percentage: 70, },
    { name: 'Express.Js', percentage: 70, },
    { name: 'Flask', percentage: 70 },
    { name: 'MongoDB', percentage: 70, },



    // Add more skills as needed
  ];
  return (
    <Box sx={{
      backgroundColor: 'black',
      // backgroundImage: `url(${SkillsBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',

    }}>
      <Container maxWidth='md'>
        <Box sx={{
          p: 2
        }}>
          <Typography py={2} variant="h3" color={'turquoise'} align="center">
            Skills
          </Typography>
        </Box>
      </Container >
      <Container  maxWidth='md'>
        {skills.map((skill, index) => (
          <SkillBar key={index} skillName={skill.name} percentage={skill.percentage} color={skill.color} />
        ))}
      </Container>
    </Box >
  );
};

export default Skills;