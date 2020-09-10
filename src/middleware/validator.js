import { GET_USERS} from "../redux/actions/user";

const validator = (store) => (next) => (action) => {
    if (
      action.type === GET_USERS &&
      action.payload.user.toLowerCase().indexOf("gcpglobal") !== -1
    ) {
      return alert("NOPE");
    }
    return next(action)  
}

export default validator