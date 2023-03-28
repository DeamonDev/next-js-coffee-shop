import { OutlinedFlag } from "@mui/icons-material";
import { Button, IconButton, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CartItemsList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ height: "100%" }}
    >
      <Typography
        sx={{
          mt: { sx: 5, md: 5 },
          ml: { sx: 1, md: 2 },
          fontSize: { xs: "h5", md: "h4" },
        }}
      >
        Shopping Cart
      </Typography>
      <Box
        overflow="scroll"
        sx={{
          borderRadius: "10px",
          backgroundColor: "#8f6842",
          height: { xs: "80%" },
          ml: { sx: 1, md: 2 },
          mr: { sx: 1, md: 2 },
        }}
      >
        <List>
          <ListItem>
            <Typography>X</Typography>
          </ListItem>
          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>
          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>
          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>
          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>

          <ListItem>
            <Typography>X</Typography>
          </ListItem>
        </List>
      </Box>
      <Button sx={{ ml: { xs: 1, md: 2 }, alignSelf: "flex-start" }}>
        <Typography>Continue Shopping</Typography>
      </Button>
    </Box>
  );
};

export default CartItemsList;
