import { AddAlertOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import { Container } from "@mui/system";

const MyAppBar = () => {
  const pages = ["products", "orders", "subscription"];

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <AddAlertOutlined
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant="contained"
                color="success"
                onClick={(ev) => console.log(ev)}
                sx={{ my: 2, color: "white", display: "block", mr: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyAppBar;
