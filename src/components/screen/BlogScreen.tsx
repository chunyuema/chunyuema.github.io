import React, { useState, ChangeEvent } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Divider,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.25) },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "12ch",
    "&:focus": { width: "20ch" },
  },
}));

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredPosts(
      blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term)
      )
    );
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" mb={6} color="primary">
        Chunyue's Blog
      </Typography>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#111" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All Posts
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchTerm}
              onChange={handleSearch}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <List>
        {filteredPosts.map((post) => (
          <React.Fragment key={post.id}>
            <ListItem>
              <ListItemText primary={post.title} secondary={post.content} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default BlogPage;
