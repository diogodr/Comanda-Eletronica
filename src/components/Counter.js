import React from 'react';
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import styled from 'styled-components';                                                                   

function Counter() {                                                                          

  const Contador = styled.div`                    
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #ff9000;
    border-radius: 15px;
    margin: 20px 20px 50px 20px;
    width: 150px;   
    height: 50px;    
  `;

  const ButtonCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    background-color: #fff;
    border-radius: 8px;
  `;

  return (
    <Contador>
      <div>
        <BiMinus style={{fontSize: 23}}/>
      </div>
      <ButtonCounter>
        <h1 style={{color: '#ff9000', fontSize: 25}}>5</h1>
      </ButtonCounter>
      <div>
        <BiPlus style={{fontSize: 23}}/>
      </div>
    </Contador>
  );
}

export default Counter;