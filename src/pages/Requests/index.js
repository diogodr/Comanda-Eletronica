import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import '../../styles/Requests.css'

function Requests() {
  const { goBack } = useHistory();

const [products, setProducts] = useState([]);

useEffect(() => {
  api.get(`/api/order/products`).then(response => {
    console.log(response.data);
    setProducts(response.data);
  })
}, []);

  return (
    <div className="root">
      <div className="header">
        <div  className="header-content">
          <BsArrowLeftShort type="button" onClick={ goBack } style={{ fontSize: 25, color: '#ff9000', marginLeft: 10 }}/> 
        </div>
        <h1 style={{ fontSize: 22 }}>Pedidos</h1>
      </div>
      <div className="body">
        <div className="filtros">
          <div className="products-button">
            Produtos
          </div>
          <div>
            Serviços
          </div>
        </div>
        <div>
            {products.map(product => 
              <div key={product.code}className="products">
                <div className="products-info">        
                  <p style={{fontSize:12}} >Cod. {product.code}</p>
                  <p style={{fontSize:12}}>{product.description}</p>
                  <p style={{fontSize:12}}>R${product.price}</p>
                </div>
                <div className="products-image">
                  <img className="product-img" src={`http://192.168.0.101:8000/api/order/photo/${product.photo}`} alt=""/>
                </div>                
              </div> 
            )}
        </div>
      </div>
    </div>
  )
}

export default Requests;