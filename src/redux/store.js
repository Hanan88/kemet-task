import { createStore } from "redux";
import questionsReducer from "./reducers/questiosReducer";

const store = createStore(questionsReducer);

export default store;
