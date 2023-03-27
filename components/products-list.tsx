import { Box, Grid, Typography } from "@mui/material";
import CoffeeCard from "./coffee-card";
import DUMMY_COFFEES from "../data/coffees";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import { selectShoppingCartItems } from "../src/store/shopping-cart-slice";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectShoppingCartItems);

  console.log(items);

  return (
    <Box
      sx={{ height: "100%", backgroundColor: "#38261e" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography color="white" sx={{ mt: { xs: 5, md: 2 } }} variant="h4">
        OUR PRODUCTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "#a8794a",
          mt: { xs: 5, md: 3 },
          height: { xs: "100%", md: "52vh" },
          width: { xs: "85%", md: "75%" },
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ height: "100%", ml: 1, mr: 2, mt: { xs: 1 }, mb: { xs: 2 } }}
        >
          {DUMMY_COFFEES.map((coffee) => {
            return (
              <Grid item md={3} xs={6}>
                <CoffeeCard
                  id={coffee.id}
                  name={coffee.name}
                  countries={coffee.countries}
                  imageLink={coffee.imageLink}
                  price={coffee.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsList;
