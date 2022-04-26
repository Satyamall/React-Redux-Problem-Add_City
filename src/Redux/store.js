import { createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"

const middleware = [thunk];
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
