import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import NameCard from "./NameCard";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { Skill } from "./Skill";

const mySkills: Skill[] = [
  { name: "Frontend", icon: FaReact, level: 40 },
  { name: "Backend", icon: FaNodeJs, level: 70 },
  { name: "Cloud & DevOps", icon: FaPython, level: 65 },
  { name: "High Performance Compute", icon: FaDatabase, level: 10 },
];

const AboutMe: React.FC = () => (
  <Container sx={{ mt: 8, mb: 8, maxWidth: "1100px" }}>
    {/* ======= TOP SECTION ======= */}
    <Grid container spacing={4} alignItems="stretch">
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          alignItems: "center", // vertical center
          justifyContent: "center", // horizontal center (optional)
        }}
      >
        <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
      </Grid>

      <Grid item xs={12} md={8}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography paragraph>
              Hello World! I'm Chunyue, a software engineer passionate about
              understanding how code, machines, and software systems work under
              the hood. My key interest is exploring availability and resilience
              in large-scale software systems. I'm fascinated by how these
              complex projects maintain functionality while continuing to evolve
              and deliver high performance.
            </Typography>
            <Typography paragraph>
              I'm also drawn to the observability of cloud-native/distributed
              systems and whether we can truly understand the root causes of
              production issues and respond accurately and quickly.
            </Typography>
            <Typography paragraph>
              Recently, I've been exploring green software engineering and
              high-performance computing. With today's growing demand for
              software and AI, I believe it's time for software engineers to be
              more proactive in addressing these challenges.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);

export default AboutMe;
