import {
  AppBar,
  Box,
  Button,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Stack } from "@mui/system";
import { green } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

import ShoppingCart from "./shopping-cart";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#38261e" }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <b>CAFFEINE</b>
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Link
                href="products"
                style={{
                  color: "white",
                  textDecoration:
                    pathname === "/products" ? "underline" : "none",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      transform: "scale(1.3)",
                      transition: "all ease-in 0.15s;",
                    },
                  }}
                >
                  Products
                </Typography>
              </Link>
              <Link
                href="about"
                style={{
                  color: "white",
                  textDecoration: pathname === "/about" ? "underline" : "none",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      transform: "scale(1.3)",
                      transition: "all ease-in 0.15s;",
                    },
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link
                href="/contact"
                style={{
                  color: "white",
                  textDecoration:
                    pathname === "/contact" ? "underline" : "none",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      transform: "scale(1.3)",
                      transition: "all ease-in 0.15s;",
                    },
                  }}
                >
                  Contact
                </Typography>
              </Link>
              <Link
                href="/mission"
                style={{
                  color: "white",
                  textDecoration:
                    pathname === "/mission" ? "underline" : "none",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      transform: "scale(1.3)",
                      transition: "all ease-in 0.15s;",
                    },
                  }}
                >
                  Our Mission
                </Typography>
              </Link>
            </Stack>
            <IconButton
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                  transition: "all ease-in 0.15s;",
                },
              }}
              onClick={handleOpen}
            >
              <LocalGroceryStoreOutlinedIcon
                style={{ color: "white", fontSize: 30 }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ShoppingCart onClose={handleClose}/>
      </Modal>
    </Fragment>
  );
};

export default Header;
