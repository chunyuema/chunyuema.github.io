import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Example additional icon

interface NameCardProps {
  name: string;
  title: string;
  email: string;
}

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: '1rem',
});

const NameCard: React.FC<NameCardProps> = ({ name, title, email }) => {
  return (
    <StyledCard>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h6" align="center">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} justifyContent="center">
              <Grid item>
                <IconButton href="https://github.com/chunyuema/" target="_blank" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://www.linkedin.com/in/chunyue-ma-7b944717a/" target="_blank" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton href="https://twitter.com/your-profile" target="_blank" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default NameCard;
