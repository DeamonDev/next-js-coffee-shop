import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getCoffeeById } from "../../data/coffees";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import {
  selectShoppingCartItems,
  selectShoppingCartTotal,
} from "../../src/store/shopping-cart-slice";
import CartItemsList from "./cart-items-list";

const style = {
  overflow: "scroll",
  position: "absolute" as "absolute",
  top: { xs: "50%", md: "50%" },
  left: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", md: "60%" },
  height: 700,
  bgcolor: "#dbd1ba",
  boxShadow: 24,
};

type ShoppingCartProps = {
  onClose: () => void;
}

const ShoppingCart = ({onClose}: ShoppingCartProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectShoppingCartItems);
  const total = useAppSelector(selectShoppingCartTotal);

  console.log(items);
  console.log(total);

  return (
    <Box sx={style}>
      <Grid
        container
        spacing={0}
        height="100%"
        sx={{ flexWrap: "no-wrap", overflowY: "auto", overflowX: "hidden" }}
      >
        <Grid item xs={12} md={8} sx={{ height: { xs: 400, md: 600 }, overflowX: "hidden" }}>
          <CartItemsList items={items} onClose={onClose} />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          overflow="auto"
          sx={{
            backgroundColor: "#c2b186",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: { xs: "10px", md: "0px" },
            display: "flex",
            flexDirection: "column",
            height: { xs: 300, md: 700 },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{
              height: "90%",
              mt: { xs: "10px", md: "35px" },
              ml: { xs: "10px", md: "20px" },
              mr: { xs: "5px", md: "15px" },
            }}
          >
            <Box display="flex" flexDirection="column" overflow="scroll">
              <Typography sx={{ fontSize: { xs: "h6", md: "h4" } }}>
                Order summary
              </Typography>
              <Divider />
              <Box
                display="flex"
                overflow="scroll"
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  mt: { xs: "2px", md: "15px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "10", md: "h6" } }}>
                  Items {items.length}
                </Typography>
                <Typography>{total.toFixed(2)} $</Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ flexDirection: { xs: "row", md: "row" } }}
            >
              <TextField
                id="promo-code"
                label="Promo Code"
                variant="outlined"
                size="small"
                InputLabelProps={{ style: { color: "#544623" } }}
                sx={{
                  width: { xs: "100px", md: "200px", background: "#e3ccaa" },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#544623",
                      color: "#544623",
                    },
                  },
                  "& label": { color: "#544623" },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: 0,
                  backgroundColor: "#544623",
                  "&:hover": { backgroundColor: "#63522a" },
                }}
                disableRipple
              >
                <b>Apply</b>
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" overflow="scroll">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                sx={{ mb: { xs: 1, md: 1 } }}
              >
                <Typography>
                  <b>Total cost</b>
                </Typography>
                <Typography>
                  <b>{total.toFixed(2)} $</b>
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#544623",
                  "&:hover": { backgroundColor: "#63522a" },
                }}
                disableRipple
              >
                <b>Checkout</b>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShoppingCart;
