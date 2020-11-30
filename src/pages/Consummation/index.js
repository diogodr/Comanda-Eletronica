import React, { useEffect, useState } from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../styles/consummation.css';

function Consummation() {

  const [infoOpen, setInfoOpen] = useState(false)

  const handleToggleInfo = () => {
    setInfoOpen(infoOpen ? false : true)
  }

  const { goBack } = useHistory();

  const [consummation, setConsummation] = useState({
    id: null,
    consumer: [
      {
      order: "",
      total: "0",
      items: [
        {
          code: "",
          description: "",
          quantity: "0",
          price: "0",
        }
      ],
    }]
  });

  useEffect(() => {
    api.get(`/api/order/consumer/452178`).then(response => {
      console.log(response.data);
      setConsummation(response.data);
    });
  }, []);

  return (
    <div className="root">
      <div className="header">
        <div  className="header-content">
          <BsArrowLeftShort type="button" onClick={ goBack } style={{ fontSize: 25, color: '#ff9000', marginLeft: 10 }}/>          
        </div>
        <h1 style={{ fontSize: 22 }} >Openshift</h1>
      </div>
      <div className="body-list">
        <ul>
          {consummation.consumer.map(consumacao =>
            <li key={consumacao.order}>
              <div className="container-pedidos ">
                <div className="pedidos">
                  <p>Pedido: {consumacao.order}</p>
                  <p>Total: R${consumacao.total}</p>
                </div>
                {consumacao.items.map(item =>
                <div key={item.code} className="items" style={{ transition: '0.2s' ,height: infoOpen ? "" : "0px", padding: infoOpen ? 12 : 0 }}>
                  <p className="pcontainer">
                    <div className="first-column">
                      <p>Código: {item.code}</p>
                      <p>Item: {item.description}</p>
                    </div>
                    <div className="second-column">
                      <p>Quantidade: {item.quantity}</p>
                      <p>Preço: {item.price}</p>
                    </div>
                  </p>
                </div>
                )}
                <div style={{ fontSize:12, display:"flex", justifyContent:'center' }}>
                  {infoOpen ?
                    (<BsChevronUp type="button" onClick={handleToggleInfo}/>) :
                    (<BsChevronDown type="button" onClick={handleToggleInfo}/>)
                  }
                </div>
              </div>
            </li>            
          )}
        </ul>
      </div>
    </div>
  );
}

export default Consummation;