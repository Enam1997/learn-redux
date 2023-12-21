const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERD = "CAKE_ORDERD";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERD = "ICECREAM_ORDERD";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orederCake(orderQuantity) {
  return {
    type: CAKE_ORDERD,
    payload: orderQuantity,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orederIcream(orderQuantity) {
  return {
    type: ICECREAM_ORDERD,
    payload: orderQuantity,
  };
}

function restockIcream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const inititalIcreamState = {
  numOfIcreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERD:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    default:
      return state;
  }
};
const icreamReducer = (state = inititalIcreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERD:
      return {
        ...state,
        numOfIcreams: state.numOfIcreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcreams: state.numOfIcreams + action.payload,
      };
    case CAKE_ORDERD:
      return {
        ...state,
        numOfIcreams: state.numOfIcreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icreamReducer,
});

// const store = createStore(rootReducer, applyMiddleware(logger));

const store = createStore(rootReducer);

console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// store.dispatch(orederCake(2));
// store.dispatch(orederCake(3));
// store.dispatch(orederCake(3));
// store.dispatch(restockCake(4));

const actions = bindActionCreators(
  { orederCake, restockCake, orederIcream, restockIcream },
  store.dispatch
);

actions.orederCake(2);
actions.orederCake(3);
actions.orederCake(3);
actions.restockCake(4);
actions.orederIcream(2);
actions.restockIcream(4);
unSubscribe();
