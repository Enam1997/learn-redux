const redux = require("redux");
const createStore = redux.createStore;
const produce = require('immer').produce

const initialState = {
  name: "Enam",
  address: {
    street: "209/1, oli market, amtola",
    city: "Dhaka",
    state: "Dhaka",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };
    return produce(state, (draft)=>{
        draft.address.street = action.payload
    })
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(updateStreet("New Street new"));

unSubscribe();
