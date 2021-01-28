import React, {useState, useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";

export default function Cart() {
    const [products, setProducts] =useState([])
    const [reload, setReload] = useState(false)
    
    useEffect(() => {
        setProducts(loadCart())
    },[reload])
    const loadAllProduct = () => {
        return (
            <div>
                <h2>This sectionis to load all product</h2>
                {products.map((product, index) => (
                    <Card
                    key={index}
                    product={product} 
                    removeFromCart={true}
                    addTocart={false}
                    setReload = {setReload}
                    reload= {reload}
                    />
        ))}
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div>
                <h2>This sectionis for checkout</h2>
            </div>
        )
    }

  return (
    <Base title="Cart Page" description="Ready to check out">
      <div className="row">
        <div className="col-6">{loadAllProduct()}</div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
}
