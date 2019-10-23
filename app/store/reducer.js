import { combineReducers } from "redux-immutable";

import { todolist } from "../components/TodoList/store";

const reducer = combineReducers({
    todolist: todolist
})

export default reducer