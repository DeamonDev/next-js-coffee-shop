import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../src/store/hooks";
import { selectShoppingCartItems } from "../../src/store/shopping-cart-slice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "10px",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", md: "60%" },
  height: 600,
  bgcolor: "#b58f55",
  boxShadow: 24,
};

const ShoppingCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectShoppingCartItems);

  console.log(items);

  return (
    <Box sx={style}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8} sx={{ height: { xs: 400, md: 600 } }}>
          <Typography variant="h4" color="white">
            SHOPPING CART
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: "#c2b186",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: { xs: "10px", md: "0px" },
            display: "flex",
            flexDirection: "column",
            height: { xs: 300, md: 600 },
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
            <Box display="flex" flexDirection="column" sx={{}}>
              <Typography sx={{ fontSize: { xs: "h6", md: "h4" } }}>
                Order summary
              </Typography>
              <Divider />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                sx={{
                  mt: { xs: "2px", md: "15px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "10", md: "h6" } }}>
                  Items 3
                </Typography>
                <Typography>23.99 $</Typography>
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
                InputLabelProps={{style: {color: "#544623"}}}
                sx={{
                  width: { xs: "100px", md: "200px", background: "#e3ccaa" },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": { borderColor: "#544623", color: "#544623" },
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
              >
                Apply
              </Button>
            </Box>
            <Box display="flex" flexDirection="column">
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
                  <b>32.99 $</b>
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
