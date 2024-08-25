import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Button, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePicture from '../assets/chunyuema.png';

interface NameCardProps {
  name: string;
  title: string;
}

const StyledCard = styled(Card)({
  margin: '1rem',
  border: '1px solid #ddd',
  borderRadius: 20,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  padding: 16,
  backgroundColor: '#80B3E6',
});

const ResponsiveAvatar = styled(Avatar)(({ theme }) => ({

  width: 150,
  height: 150,

  [theme.breakpoints.down('md')]: {
    width: 100,
    height: 100,
  },
  [theme.breakpoints.down('sm')]: {
    width: 120,
    height: 120,
  },
  [theme.breakpoints.down('xs')]: {
    width: 120,
    height: 120,
  },
}));

const NameCard: React.FC<NameCardProps> = ({ name, title }) => {
  return (
    <StyledCard>
      <CardContent>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <ResponsiveAvatar alt="Chunyue Ma" src={profilePicture} />
          </Grid>
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
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#E9DB5D', color: '#000', '&:hover': { backgroundColor: '#d4c45e' } }}
        fullWidth
        href="https://chunyuema.notion.site/Chunyue-Ma-s-Resume-da6bc94872c945fca41e3723f61a65e7"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
    </StyledCard>
  );
};

export default NameCard;
