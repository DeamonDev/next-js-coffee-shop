import { Box, Grid, Typography } from "@mui/material";
import CoffeeCard from "./coffee-card";
import DUMMY_COFFEES from "../data/coffees";

const ProductsList = () => {
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
        <Grid container spacing={2} sx={{ height: "100%", ml: 1, mr: 2 }}>
          <Grid item md={3} xs={6}>
            <CoffeeCard
              id={DUMMY_COFFEES[0].id}
              name={DUMMY_COFFEES[0].name}
              countries={DUMMY_COFFEES[0].countries}
              imageLink={DUMMY_COFFEES[0].imageLink}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <CoffeeCard
              id={DUMMY_COFFEES[1].id}
              name={DUMMY_COFFEES[1].name}
              countries={DUMMY_COFFEES[1].countries}
              imageLink={DUMMY_COFFEES[1].imageLink}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <CoffeeCard
              id={DUMMY_COFFEES[2].id}
              name={DUMMY_COFFEES[2].name}
              countries={DUMMY_COFFEES[2].countries}
              imageLink={DUMMY_COFFEES[2].imageLink}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <CoffeeCard
              id={DUMMY_COFFEES[3].id}
              name={DUMMY_COFFEES[3].name}
              countries={DUMMY_COFFEES[3].countries}
              imageLink={DUMMY_COFFEES[3].imageLink}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsList;
