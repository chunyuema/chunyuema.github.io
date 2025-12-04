import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilePicture from "../assets/icon.png";

interface NameCardProps {
  name: string;
  title: string;
}

const NameCard: React.FC<NameCardProps> = ({ name, title }) => (
  <Card>
    <CardContent>
      <Grid container direction="column" alignItems="center" spacing={1}>
        <Grid item>
          <Avatar
            src={profilePicture}
            alt={name}
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1} justifyContent="center">
            <Grid item>
              <IconButton href="https://github.com/chunyuema" target="_blank">
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/chunyue-ma-7b944717a"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default NameCard;
