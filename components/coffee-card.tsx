import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Coffee } from "../types/Coffee";
import ReactCountryFlag from "react-country-flag";
import { Container } from "@mui/system";

type CoffeeCardProps = Coffee;

const COUNTRIES_MAP: Record<string, string> = {
  BR: "Brasil",
  MX: "Mexico",
  IN: "Indie",
  NP: "Nepal",
};

const CountryIcons = ({ countries }: { countries: string[] }) => {
  return (
    <Box sx={{gap: {xs: "5px", md: "10px"}}} display="flex" flexDirection="row">
      {countries.map((countryCode) => (
        <Tooltip title={COUNTRIES_MAP[countryCode]}>
          <Box sx={{fontSize: {xs: "1.5em", md: "1.75em"}}}>
            <ReactCountryFlag
              key={countryCode}
              countryCode={countryCode}
            />
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

const CoffeeCard = ({ id, name, imageLink, countries }: CoffeeCardProps) => {
  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.03)",
          transition: "all ease-in 0.15s;",
        },
        backgroundColor: "#855129",
        borderRadius: "10px",
        mt: {xs: "1px", md: "5px"},
        p: 0
      }}
    >
      <CardMedia
        sx={{ height: { xs: "180px", md: "300px" } }}
        component="img"
        image={imageLink}
        title="cffe-1"
      />
      <CardContent sx={{p: 0}}>
        <Box display="flex" justifyContent="space-between" flexDirection="column" sx={{p: 0}}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ml: {xs: 1, md: 3}, mt: {xs: 0, md: 2}}}
          >
            <Typography color="white" fontWeight="bold" sx={{mb: {xs: "0px", md: "3px"}}}>
              {name}
            </Typography>
            <CountryIcons countries={countries} />
          </Box>

          <IconButton>
            <AddCircleOutline fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
