import { OutlinedFlag } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CartItem from "./cart-item";

type CartItemsListProps = {
  items: {
    id: string;
    amount: number;
    price: number;
  }[];
  onClose: () => void;
};

const CartItemsList = ({ items, onClose }: CartItemsListProps) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ height: "100%" }}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Typography
          sx={{
            mt: { xs: 2, md: 5 },
            ml: { xs: 1, md: 2 },
            mb: { xs: 1, md: 2 },
            fontSize: { xs: "h5", md: "h4" },
          }}
        >
          Shopping Cart
        </Typography>
        <IconButton sx={{ mt: { sx: 5, md: 5 }, mr: { sx: 1, md: 2 } }} onClick={onClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "scroll",
          height: { xs: "80%", md: "100%" },
          ml: { xs: 0, md: 0 },
          mr: { xs: 1, md: 1 },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ height: "100%", ml: { xs: 0, md: 0 }, mt: { xs: 2, md: 5 } }}
        >
          {items.map((item) => {
            return (
              <Grid item xs={12}>
                <CartItem
                  id={item.id}
                  total={item.amount * item.price}
                  amount={item.amount}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default CartItemsList;
