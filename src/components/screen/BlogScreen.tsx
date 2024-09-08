import { useState, ChangeEvent } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import {
  Toolbar,
  AppBar,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Divider,
} from "@mui/material";

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
  // Add more blog posts as needed
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
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
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
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
    <Container>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#4CAF50" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            All Posts
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              fullWidth
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <List>
        {filteredPosts.map((post) => (
          <>
            <ListItem key={post.id}>
              <ListItemText primary={post.title} secondary={post.content} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
}

export default BlogPage;
