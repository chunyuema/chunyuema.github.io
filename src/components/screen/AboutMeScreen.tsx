import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import NameCard from "../NameCard";
import SkillSet from "../Skill";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { Skill } from "../Skill";

const mySkills: Skill[] = [
  { name: "Frontend", icon: FaReact, level: 40 },
  { name: "Backend", icon: FaNodeJs, level: 70 },
  { name: "Cloud & DevOps", icon: FaPython, level: 65 },
  { name: "High Performance Compute", icon: FaDatabase, level: 10 },
];

const AboutMe: React.FC = () => (
  <Container sx={{ mt: 8, mb: 8, maxWidth: "1100px" }}>
    <Grid container spacing={4} alignItems="stretch">
      <Grid item xs={12} md={4}>
        <NameCard name="Chunyue Ma" title="Software Engineer @ AWS Lambda" />
      </Grid>
      <Grid item xs={12} md={8}>
        <SkillSet title="Software Engineer Skill Set" skills={mySkills} />
      </Grid>
    </Grid>
    <Grid container spacing={4} alignItems="stretch" sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography paragraph>
              Hello World! I'm Chunyue, a software engineer passionate about
              understanding how code, machines, and software systems work under
              the hood. My key interest is exploring availability and resilience
              in large-scale software systems. I'm fascinated by how these
              complex projects maintain functionality while continuing to evolve
              and deliver high performance. I'm also drawn to the observability
              of cloud-native/distributed systems. I'm particularly intrigued by
              whether we can truly understand the root causes of production
              issues and how we can respond to them accurately and quickly.
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
