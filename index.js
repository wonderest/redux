const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// initialize
// const initialState = {
//   numOfCakes: 10,
//   numOfCreams: 20,
// };
const cakesInitial = {
  numOfCakes: 10,
};
const icecreamsInitial = {
  numOfCreams: 20,
};
// action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Redux Buy Cake",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Redux Buy Icecream",
  };
};
// reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfCreams: state.numOfCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
const cakesReducer = (state = cakesInitial, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const icecreamsReducer = (state = icecreamsInitial, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCreams: state.numOfCreams - 1,
      };
    default:
      return state;
  }
};
// store
const rootReducer = combineReducers({
  cake: cakesReducer,
  cream: icecreamsReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
// subscribe
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
