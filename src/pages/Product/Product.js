import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";

import '../../styles/product.css';
import Counter from '../../components/Counter';

function Product(props) {
  const location = useLocation();
  console.log("Console: ", location)

  const product = location.product;

  const { goBack } = useHistory();

  return (
    <div className="root">
      <div className="header">
        <div  className="header-content">
          <BsArrowLeftShort type="button" onClick={ goBack } style={{ fontSize: 25, color: '#ff9000', marginLeft: 10 }}/> 
        </div>
        <h1 style={{ fontSize: 22 }}>Carrinho de compras</h1>
      </div>
      <div className="container-product-info">
        <div className="img-product-des">
          <img className="product-img-description" src={`http://192.168.0.104:8000/api/order/photo/${product.photo}`} alt=""/>
        </div>
        <div className="name-title">
          <h1 style={{fontSize:20}}>{product.description}</h1>
        </div>
        <div className="product-description">
          <h2 style={{fontSize:12}}>{product.note}</h2>
        </div>
        <div className="obs">
          <Counter/>
          <span style={{marginBottom: '10px'}}>Observação</span>
          <input style={{borderRadius: 10, height: '20vh', width: '75vw'}}/>
        </div>
      </div>
    </div>
  );
}

export default Product;