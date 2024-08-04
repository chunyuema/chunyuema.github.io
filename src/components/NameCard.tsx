import React from 'react';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';

interface NameCardProps {
  name: string;
  title: string;
  email: string;
}

const NameCard: React.FC<NameCardProps> = ({ name, title, email }) => {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', mt: 5 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={name} src="/src/assets/chunyuema.png" sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs>
            <Typography>
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              Email: <a href={`mailto:${email}`}>{email}</a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NameCard;
