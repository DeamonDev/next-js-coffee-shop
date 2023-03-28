import { AddCircle, AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Icon,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Coffee } from "../types/Coffee";
import ReactCountryFlag from "react-country-flag";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { addItemById } from "../src/store/shopping-cart-slice";
import { useState } from "react";

type CoffeeCardProps = {
  id: string;
  name: string;
  imageLink: string;
  countries: string[];
  price: number;
  onAddItem: (id: string) => void;
};

const COUNTRIES_MAP: Record<string, string> = {
  BR: "Brasil",
  MX: "Mexico",
  IN: "Indie",
  NP: "Nepal",
};

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const CountryIcons = ({ countries }: { countries: string[] }) => {
  return (
    <Box
      sx={{ gap: { xs: "5px", md: "10px" } }}
      display="flex"
      flexDirection="row"
    >
      {countries.map((countryCode) => (
        <Tooltip key={countryCode} title={COUNTRIES_MAP[countryCode]}>
          <Box sx={{ fontSize: { xs: "1.5em", md: "1.75em" } }}>
            <ReactCountryFlag key={countryCode} countryCode={countryCode} />
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

const CoffeeCard = ({
  id,
  name,
  imageLink,
  countries,
  price,
  onAddItem,
}: CoffeeCardProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const addItemHandler = (id: string) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onAddItem(id);
    }, 500);
  };

  return (
    <Card
      sx={{
        "&:hover": {
          transform: "scale(1.03)",
          transition: "all ease-in 0.15s;",
        },
        backgroundColor: "#855129",
        borderRadius: "10px",
        mt: { xs: "1px", md: "5px" },
      }}
    >
      <CardMedia
        sx={{ height: { xs: "180px", md: "300px" } }}
        component="img"
        image={imageLink}
        title="cffe-1"
      />
      <CardContentNoPadding>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          sx={{ p: 0 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              sx={{ ml: { xs: 1, md: 3 }, mt: { xs: 0, md: 2 } }}
            >
              <Typography
                color="white"
                fontWeight="bold"
                sx={{
                  mb: { xs: "0px", md: "3px" },
                  fontSize: { xs: 13, md: 18 },
                }}
              >
                {name}
              </Typography>
              <CountryIcons countries={countries} />
            </Box>
            <Typography
              color="white"
              fontWeight="bold"
              sx={{
                mt: { xs: 0, md: 2 },
                mr: { xs: 1, md: 3 },
                fontSize: { xs: 13, md: 18 },
              }}
            >
              {price} $
            </Typography>
          </Box>

          <IconButton
            sx={{ backgroundColor: "#946e3d", borderRadius: "0" }}
            onClick={addItemHandler.bind(null, id)}
            disableRipple
          >
            {!isLoading ? (
              <AddCircleOutline fontSize="large" sx={{ color: "white" }} />
            ) : (
              <CircularProgress color="success" size="2rem" />
            )}
          </IconButton>
        </Box>
      </CardContentNoPadding>
    </Card>
  );
};

export default CoffeeCard;
