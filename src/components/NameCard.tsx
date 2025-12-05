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
import profilePicture from "../assets/profile.png";

interface NameCardProps {
  name: string;
  title: string;
}

const NameCard: React.FC<NameCardProps> = ({ name, title }) => (
  <Grid
    item
    xs={12}
    md={4}
    sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Avatar
        src={profilePicture}
        alt="Chunyue Ma"
        sx={{ width: 150, height: 150 }}
      />
      <Typography variant="h6" align="center">
        Chunyue Ma
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary">
        Software Engineer @ AWS Lambda
      </Typography>
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
    </div>
  </Grid>
);

export default NameCard;
