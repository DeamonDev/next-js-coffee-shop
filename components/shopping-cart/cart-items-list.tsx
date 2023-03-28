import { OutlinedFlag } from "@mui/icons-material";
import { Button, IconButton, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const CartItemsList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ height: "100%" }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography
          sx={{
            mt: { xs: 2, md: 5 },
            ml: { xs: 1, md: 2 },
            mb: { xs: 1, md: 2},
            fontSize: { xs: "h5", md: "h4" },
          }}
        >
          Shopping Cart
        </Typography>
        <IconButton sx={{mt: {sx: 5, md: 5}, mr: {sx: 1, md: 2}}}>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        overflow="scroll"
        sx={{
          borderRadius: "10px",
          backgroundColor: "#8f6842",
          height: { xs: "80%" },
          ml: { xs: 1, md: 2 },
          mr: { xs: 1, md: 2 },
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
    </Box>
  );
};

export default CartItemsList;
