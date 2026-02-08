import React from "react";
import {
    Container,
} from "@mui/material";
import EmploymentHistory from "./EmploymentHistory";

const Resume: React.FC = () => (
    <Container sx={{ mt: 8, mb: 8, maxWidth: "1100px" }}>
        {/* Employment History Section */}
        <EmploymentHistory />
    </Container>
);

export default Resume;
