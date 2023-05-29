// import { createStore } from "redux";
import { combineReducers } from "redux";
import { ReduxLoggerOptions } from "redux-logger";
const reduxThunk = require("redux-thunk").default;
// const applyMiddlware = redux.applyMiddleware
const createStore = createStore;
const combineReducers = redux.combineReducers;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware;

const axios = require('axios')

// // action

// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";
// // // const s = {
// //   type: BUY_CAKE,
// // };

// function buyCake() {
//   // action creator
//   return {
//     type: BUY_CAKE,
//   };
// }

// function buyIcecream() {
//   // action creator
//   return {
//     type: BUY_ICECREAM,
//   };
// }

// // reducer => how to transform state !

// // (state,action) => newstate

// // const initialState = {
// //   numOfCakes: 10,
// //   numOfIcecream : 20
// // };
// const initialCakeState = {
//   numOfCakes: 10,
// };
// const initialIcecreamState = {
//   numOfIcecream: 20,
// };

// // const reducer = (state = initialState, action) => {
// //   switch(action.type){
// //     case BUY_CAKE :
// //       return{...state , numOfCakes:state.numOfCakes-1} ;
// //       case BUY_ICECREAM :
// //       return{...state , numOfIcecream:state.numOfIcecream-1} ;
// //       default :
// //       return state ;
// //   }
// // };

// const cakeReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return { ...state, numOfCakes: state.numOfCakes - 1 };
//     default:
//       return state;
//   }
// };
// const icecreamReducer = (state = initialIcecreamState, action) => {
//   switch (action.type) {
//     case BUY_ICECREAM:
//       return { ...state, numOfIcecream: state.numOfIcecream - 1 };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   icecream: icecreamReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(logger));

// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// console.log("initial state", store.getState());

// console.log(store);

/////////////////////////

// async Js =>

// fetch users :
// 1. request => مثلا لودینگ
// 2. success مثلا دیتا
// 3. failure مثلا اررور

// 1. action :
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

// 2. Action Creature

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}

function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}

// 3. Reducer

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: "", data: action.payload };
    default:
      return state;
  }
};

// 4. createStore


// aysync action creator :

const fetchUsers = () => {
  dispatch(fetchUsersRequest)
  return function (dispatch) {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      const userId = res.data.map(u => u.id) ;
      dispatch(fetchUsersSuccess(userId))
    }).catch(error=>{
      dispatch(fetchUsersFailure(error))
    })
  }
}


const store = createStore(reducer,applyMiddleware(reduxThunk,logger));


store.dispatch(fetchUsers())