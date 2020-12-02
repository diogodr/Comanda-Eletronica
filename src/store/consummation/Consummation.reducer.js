import api from '../../services/api';

//Esse é o estado inicial, ou seja, assim que o Componente abriu e não consultou nada.
const initial_state = {
  id: null,
  orders: [
    {
      order: 0,
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
};

//Aqui cria-se um TYPE somente para ficar fácil de usar o mesmo nome nas actions.
export const actionsTypes = {
  GET_CONSUMMATIONS: 'CONSUMMATIONS/GET'
};

//Aqui está listando todas as actions de consummations
export const actions = {
  //Essa é a primeira action, que recebe o consumer por parametro para buscar suas consumações na API.
  getConsummations: payload => {
    return ({
      //Esse aqui é o TYPE ali de cima, ou seja é uma action que Busca.
      type: actionsTypes.GET_CONSUMMATIONS,
      //O Payload é o resultado da api que vai ser usado no reducer, ou seja no estado global.
      payload    
    });
  }
};

//Esse é o reducer em si, cada CASE, é referente a uma action.
const consummationReducer = (state = initial_state, action) => {
  switch (action.type) {
    //Esse actions chamará a action ali de cima, recebendo um valor no PAYLOAD.
    case actionsTypes.GET_CONSUMMATIONS:
      //Aqui ele verificou qual é a action, e seta no estado global, a resposta do Payload.
      return action.payload;
    default:
      //Por padrão se não tiver alteração o reducer devolve o state já existente.
      return state
  }
};

export default consummationReducer;