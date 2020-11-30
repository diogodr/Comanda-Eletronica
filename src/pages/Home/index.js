import React from 'react';
import { useLocation } from 'react-router-dom';
import InitialProfile from '../InitialProfile';

// import { Container } from './styles';

function Home(props) {
  const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <div>
      <InitialProfile orderinfo={location.state}/>
    </div>
  );
}

export default Home;