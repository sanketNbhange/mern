import React from 'react';
import { API } from '../../backend';

// import { Container } from './styles';

function ImageHelper({product}) {

    var imageurl = product ? `${API}/product/photo/${product._id}`: "https://images.pexels.com/photos/3561340/pexels-photo-3561340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  return (
    <img
    src={imageurl}
    alt="photo"
    style={{ maxHeight: "100%", maxWidth: "100%" }}
    className="mb-3 rounded"
  />
  );
}

export default ImageHelper;