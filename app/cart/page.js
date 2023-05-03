import age from "./data";
import { Hello } from "./hello";


export default function Cart() {
  let cart = ['tomatoes', 'pasta'];

    return (
      <div>
        <Hello />
        <h4 className="title">Cart</h4>
        <CartItem cart={cart[0]}/>
        <CartItem cart={cart[1]}/>
        <Banner name = {'현대'} />
        <Banner name = {'롯데'} />
        <Banner name = {'하나'} />
      </div>
    )
  } 

  const Banner = (props) => {
    return (<h5>{props.name}카드 결제 행사중</h5>)
  }

  const CartItem = (props) => {

    return (
      <div className="cart-item">
          <p>{props.cart}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    );
  }