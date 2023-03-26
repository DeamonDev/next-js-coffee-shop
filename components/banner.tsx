import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Banner = () => {
  return (
    <Card>
      <div style={{ position: "relative", borderRadius: "0" }}>
        <CardMedia
          style={{ height: "400px" }}
          component="img"
          image={"/coffee-banner.jpg"}
          title="Coffee"
          alt="Coffee"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            position: "absolute",
            color: "white",
            top: 130,
            left: 20
          }}
        >
          <Typography variant="h3">THE BEST QUALITY</Typography>
          <Typography variant="h3">COFFEE BEANS</Typography>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
