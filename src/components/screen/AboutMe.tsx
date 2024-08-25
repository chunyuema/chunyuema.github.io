import React from 'react';
import { Container, Typography, Card, CardContent, Avatar, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import profilePicture from "../../assets/chunyuema.png"
import NameCard from '../NameCard';
import EmploymentHistory from '../EmploymentHistory';

const StyledContainer = styled(Container)({
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
});

const StyledAvatar = styled(Avatar)({
  width: 200,
  height: 200,
  margin: '0 auto',
});

const StyledCard = styled(Card)({
  marginTop: '1rem',
});

const AboutMe: React.FC = () => {
  return (
    <StyledContainer>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box 
            display="flex"
            flexDirection="row" // Ensures side-by-side layout on small screens
            alignItems="center" 
            justifyContent="center" 
            flexWrap="wrap" // Allows wrapping on smaller screens
            height="100%" // Ensure the container takes the full height of the Grid item
          >
            <StyledAvatar
              alt="Chunyue Ma"
              src={profilePicture}
            />
            <NameCard name="Chunyue Ma" title="Software Engineer"/>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                Hello, Chunyue here!
              </Typography>
              <Typography variant="body1" paragraph>
                I am deeply passionate about working with and continually learning
                about distributed software systems. One of my key interests lies in
                exploring the availability and resilience of large scale software
                projects. I am fascinated by how such projects, despite their scale
                and complexity, maintain their functionality and continue to deliver
                high performance. This includes considering how these systems can
                withstand high loads, handle errors efficiently, and recover from
                failures swiftly. Additionally, I also enjoy delving into the concept
                of the observability of distributed systems. I am intrigued by the
                process of monitoring and understanding the state of the system based
                on the outputs it produces. Specifically, can we truly understand what
                is happening in the production such that we can always respond in the
                most accurate and fast way possible?
              </Typography>
            </CardContent>
          </StyledCard>
          
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default AboutMe;
