import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch } from "../../src/store/hooks";
import { addItemById, removeItemById } from "../../src/store/shopping-cart-slice";

type CounterProps = {
  id: string;
  amount: number;
};

const Counter = ({ id, amount }: CounterProps) => {
  const dispatch = useAppDispatch();

  const removeItemHandler = (id: string) => {
    dispatch(removeItemById(id));
  };

  const addItemHandler = (id: string) => {
    dispatch(addItemById(id));
  };

  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", md: "row" }, maxHeight: "100px" }}
    >
      <Button
        variant="contained"
        disableRipple
        sx={{
          borderTopRightRadius: 0,
          maxHeight: { xs: "30px", md: "50px" },
          borderBottomRightRadius: 0,
          backgroundColor: "#5e4f2a",
          "&:hover": {
            backgroundColor: "#52482f"
          }
        }}
        onClick={addItemHandler.bind(null, id)}
      >
        <Typography variant="h5">
          <b>+</b>
        </Typography>
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          borderTop: 1,
          minWidth: { md: "50px" },
          borderBottom: 1,
          backgroundColor: "#d1c094",
        }}
      >
        <Typography>{amount}</Typography>
      </Box>
      <Button
        variant="contained"
        disableRipple
        sx={{
          borderTopLeftRadius: 0,
          maxHeight: { xs: "30px", md: "50px" },
          borderBottomLeftRadius: 0,
          backgroundColor: "#5e4f2a",
          "&:hover": {
            backgroundColor: "#52482f"
          }
        }}
        onClick={removeItemHandler.bind(null, id)}
      >
        <Typography variant="h5">
          <b>-</b>
        </Typography>
      </Button>
    </Box>
  );
};

export default Counter;
