import { Link, NavLink } from "react-router-dom";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <AppBar position="fixed" color="darkBlue">
        <Toolbar>
          <Link to="/" className="logo">
            <Typography variant="h4" sx={{ paddingX: "2rem" }}>
              WeatherApp
            </Typography>
          </Link>
          <Stack component="nav" direction="row" gap={4}>
            <NavLink to="/" className="navlink">
              <Typography variant="h6" fontWeight={400} lineHeight={1}>
                Home
              </Typography>
            </NavLink>
            <NavLink to="/favorites" className="navlink">
              <Typography variant="h6" fontWeight={400} lineHeight={1}>
                Favorites
              </Typography>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
};

export default AppHeader;
