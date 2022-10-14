import { combineReducers } from "redux";
import modalSlice from "../connect-wallet/redux/modalSlice";
import kadenaSlice from "../connect-wallet/redux/kadenaSlice.js";

const rootReducer = combineReducers({
  kadenaInfo: kadenaSlice,
  connectWalletModal: modalSlice,
});

export default rootReducer;