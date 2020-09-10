import validator from "./validator"
import api from "./api";
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"

export default applyMiddleware(
    thunk,
    validator,
    api
)