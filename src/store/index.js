import {createLogger, createStore} from "vuex";
import TodoListStore from '../features/TodoList/store/index';

const store = createStore({
    modules: {
      todolist: TodoListStore
    },
    strict: true,
    plugins: [createLogger()]
})

export default store;