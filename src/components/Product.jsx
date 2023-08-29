import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/CartSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{ maxWidth: 350, maxHeight: 500 }}
      style={{ padding: "5px", border: "1px solid", margin: "5px" }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.title.slice(0, 30)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description.slice(0, 150)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">₹{Number(props.price)}</Button>
        <Button
          variant="contained"
          onClick={(e) =>
            dispatch(
              addItem({
                props,
              })
            )
          }
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
