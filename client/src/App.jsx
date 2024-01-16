import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, ThemeProvider } from "@mui/material";
import axios from "axios";

import AppHeader from "@/components/Layout/AppHeader";
import { API_HOST } from "@/constants";
import { getUserId, setUserId } from "@/utils";
import { theme } from "@/utils/MuiTheme";
import "@/App.scss";

const App = () => {
  const setUser = useCallback(async () => {
    if (getUserId()) return;
    try {
      const { data } = await axios.get(API_HOST);
      setUserId(data.userId);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setUser();
  }, [setUser]);

  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <main>
        <Box>
          <Container maxWidth="lg" spacing={2} className="AppContainer">
            <Outlet />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default App;
