import React from 'react';
import { Container, Typography, Card, CardContent, Grid, } from '@mui/material';
import { styled } from '@mui/material/styles';
import NameCard from '../NameCard';

const CenteredContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centers horizontally
  justifyContent: 'center', // Centers vertically
  minHeight: '90vh', // Ensures the container takes up the full viewport height
  padding: theme.spacing(2), // Optional: Add some padding
}));

const StyledCard = styled(Card)({
  margin: '1rem',
  border: '1px solid #ddd',
  borderRadius: 2,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  padding: 16,
  backgroundColor: '#fff',
});

const AboutMe: React.FC = () => {
  return (
    <CenteredContainer>
      <Grid container alignItems="stretch">
        <Grid item xs={12} sm={12} md={3} justifyContent={"center"} >
          <NameCard name="Chunyue Ma" title="Software Engineer"/>
        </Grid>
        <Grid item xs={12} sm={12} md={9} justifyContent={"center"}>
          <StyledCard>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Hello World!
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
    </CenteredContainer>
  );
};

export default AboutMe;
