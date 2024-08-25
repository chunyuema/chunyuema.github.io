import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Example additional icon
import EmploymentHistory from './EmploymentHistory';

interface NameCardProps {
  name: string;
  title: string;
}

const StyledCard = styled(Card)({
  margin: '1rem',
  border: '1px solid #ddd',
  borderRadius: 8,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  padding: 16,
  backgroundColor: '#fff',
});

const NameCard: React.FC<NameCardProps> = ({ name, title }) => {
  return (
    <StyledCard>
      <CardContent style={{ maxHeight: 200, overflowY: 'auto' }}>
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
      <Button
        variant="contained"
        color="primary"
        fullWidth
        href="https://chunyuema.notion.site/Chunyue-Ma-s-Resume-da6bc94872c945fca41e3723f61a65e7"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>
    </StyledCard>
  );
};

export default NameCard;
