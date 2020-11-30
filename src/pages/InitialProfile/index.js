import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/initialprofile.css';

function InitialProfile(props) {
  console.log('Teste: ', props)

  return (
    <div className="root">
      <div className="user">
        <h1 style={{ marginBottom: '15px' }}>{props.orderinfo.hospede}</h1>
        <p className="user-info">Reserva: {props.orderinfo.reserva}</p>
        <p className="user-info">Suíte: {props.orderinfo.suite}</p>
        <p className="user-info">Check-in: {props.orderinfo.checkin}</p>
        <p className="user-info">Check-out: {props.orderinfo.checkout}</p> 
      </div>
      <Link to="/requests" className="requests">
        <h1>Pedidos</h1>
      </Link>
      <Link to="/consummation" className="consumme">
          <h1>Consumação</h1>
      </Link>
    </div>
  );
}

export default InitialProfile;