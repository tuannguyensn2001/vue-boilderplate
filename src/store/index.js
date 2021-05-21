import {createStore} from "vuex";
import TodoListStore from '../features/TodoList/store/index';

const store = createStore({
    modules: {
        todolist: TodoListStore
    }
})

export default store;