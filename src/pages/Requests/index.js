import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import '../../styles/Requests.css';
import Axios from 'axios';

function Requests() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const { goBack } = useHistory();

useEffect(() => {
  api.get(`/api/order/products`).then(response => {
    setProducts(response.data);
  })
}, []);

const [list, setList] = useState([
  {
    "code": 0,
    "description": "",
    "price": ""
  }
]);

const handleAdd = (code, description, price) => {
  const item = products
  setList([...list, item])
}

const body = {
  Id: 0,
  itens: [
     {
        code: 0,
        price: "", 
      },
  ]
}

async function handleAddProducts() {
  const response = await api.post ('http://', body)

  setList([ ...list, response.data ])
}

const handleProductDescription = (product) =>{
  history.push({ pathname: '/product', product: product });
}

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
              <div type="button" onClick={() => handleProductDescription(product)} key={product.code}className="products">
                <div className="products-info">        
                  <p style={{fontSize:12}} >Cod. {product.code}</p>
                  <p style={{fontSize:12}}>{product.description}</p>
                  <p style={{fontSize:12}}>R${product.price}</p>
                </div>
                <div className="products-image">
                  <img className="product-img" src={`http://192.168.0.104:8000/api/order/photo/${product.photo}`} alt=""/>
                </div>                
              </div> 
            )}
        </div>
      </div>
    </div>
  )
}

export default Requests;