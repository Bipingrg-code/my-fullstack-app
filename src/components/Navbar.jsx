import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import PersonIcon from "@mui/icons-material/Person";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Login from "./Login";

function Navbar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <AddHomeWorkIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mayd.IT
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/About">
              <Button color="inherit">About</Button>
            </Link>
            <Link to="/Features">
              <Button color="inherit">Features</Button>
            </Link>
            <Link to="/Login">
              <IconButton size="large" edge="start" color="inherit">
                <PersonIcon />
              </IconButton>
            </Link>
          </Stack>
          <Typography varient="h5">Create an Account</Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default Navbar;
