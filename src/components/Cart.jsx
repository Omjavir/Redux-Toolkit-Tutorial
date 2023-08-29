import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/CartSlice";

const Cart = () => {
  const items = useSelector(getItemSelector);
  const total = items.reduce((acc, curr) => acc + curr.props.price, 0);
  // console.log("total", total);
  console.log("items", items);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        Total Items : <b>{items.length}</b>
      </h2>
      <h2>
        Total Price : <b>₹{total}/-</b>
      </h2>
    </div>
  );
};

export default Cart;
