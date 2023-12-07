import { Button, Container , Table , Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../rtk/slices/Cart-slice";
import { useEffect } from "react";
import { saveCart } from "../rtk/slices/Cart-slice";


function Cart () {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const totalprice = cart.reduce((acc, product)=> {
        acc += product.price * product.quantity;
        return acc;
    },0);
   /* useEffect(() => {
        dispatch(saveCart(cart)); // Save cart to local storage
      }, [cart, dispatch ]);*/
      
   /* const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalprice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    dispatch(saveCart(cart)); // Save cart to local storage
  }, [cart, dispatch]);*/

    return (
        <Container>
        <h1 className="py-5"></h1>
        <h5>Total Price : {totalprice.toFixed(2)}</h5>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Title</th>
          <th>quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) => (
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>
                <Image src={product.image} style={{width: "100px" , height: "100px"}}/>
            </td>
            <td>{product.title}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
        </Container>
    )
}
export default Cart;

