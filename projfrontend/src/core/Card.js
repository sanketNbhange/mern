import React, {useState, useEffect} from 'react';
import ImageHelper from './helper/ImageHelper';
import { getProducts } from './helper/coreapicalls';
import { Redirect } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';

const Card = (
    {
        product,
        addTocart = true,
        removeFromCart = false,
        setReload= f => f,
        reload = undefined
    }
) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count)
   

    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true))
    }

    const getARedirect = redirect => {
        if(redirect)
        {
        return <Redirect to="/cart" />
        }
}

    const showAddToCart = addtoCart => {
        
        return (
            addtoCart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        )
    }

    const showRemoveFromCart = removeFromCart => {
        return (
            removeFromCart && (<button
                onClick={() => {
                  removeItemFromCart();
                  setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>)
            
            )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead text-center">{product.name}</div>
        <div className="card-body">
            {getARedirect(redirect)}
          <div className="rounded border border-success p-2">
            <ImageHelper product={product}/>
          </div>
          <p className="lead bg-success font-weight-normal text-wrap">
            {product.description}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {product.price}</p>
          <div className="row">
            <div className="col-12">
                {showAddToCart(addTocart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card;