import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/consummation/Consummation.reducer'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../styles/consummation.css';

function Consummation() {

  const dispatch = useDispatch();

  const consummations = useSelector(state => state.consummations);

  console.log("LALALA:", consummations)

  const [infoOpen, setInfoOpen] = useState(false)

  const handleToggleInfo = () => {
    setInfoOpen(infoOpen ? false : true)
  }

  const { goBack } = useHistory();

  const getConsummations = async () => {
    console.log("UÈ?")
    const response = await api.get(`/api/order/consumer/0`);
    console.log("REPONSE: ", response.data)
    dispatch(actions.getConsummations(response.data));
  }

  useEffect(() => {
    getConsummations();
  }, [])

  return (
    <div className="root">
      <div className="header">
        <div className="header-content">
          <BsArrowLeftShort type="button" onClick={goBack} style={{ fontSize: 25, color: '#ff9000', marginLeft: 10 }} />
        </div>
        <h1 style={{ fontSize: 22 }} >Openshift</h1>
      </div>
      <div className="body-list">
        <ul>
          {consummations ? (
            consummations.orders.map(order =>
              <li key={order.order}>
                <div className="container-pedidos ">
                  <div className="pedidos">
                    <p>Pedido: {order.order}</p>
                    <p>Total: R${order.total}</p>
                  </div>
                  {order.items.map(item =>
                    <div key={item.code} className="items" style={{ transition: '0.2s', height: infoOpen ? "" : "0px", padding: infoOpen ? 12 : 0 }}>
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
                  <div style={{ fontSize: 12, display: "flex", justifyContent: 'center' }}>
                    {infoOpen ?
                      (<BsChevronUp type="button" onClick={handleToggleInfo} />) :
                      (<BsChevronDown type="button" onClick={handleToggleInfo} />)
                    }
                  </div>
                </div>
              </li>
            )
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Consummation;