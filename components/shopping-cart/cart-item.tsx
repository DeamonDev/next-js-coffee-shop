import styled from "@emotion/styled";
import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../src/store/hooks";
import Counter from "./counter";

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

type CartItemProps = {
  id: string;
  amount: number;
  total: number;
};

const CartItem = ({ id, amount, total }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);


  const imageLink = `/${id}.jpg`;

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        ml: 0,
        backgroundColor: "#dbd1ba",
        borderRadius: "10px",
        height: { md: "100px" },
      }}
    >
      <Box display="flex" flexDirection="row" sx={{ ml: { xs: 0, md: 0 } }}>
        <Box
          component="img"
          src={imageLink}
          sx={{
            maxWidth: "100px",
            height: "100px",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        />
      </Box>
      <Counter amount={amount} id={id} />
      <Box display="flex" flexDirection="column">
        <Typography sx={{ mr: { xs: 3, md: 5 } }}>TOTAL</Typography>
        <Typography>{total.toFixed(2)} $</Typography>
      </Box>
    </Box>
  );
};

export default CartItem;
