const TodoListStore = {
    namespace: true,
    state: () => ({
        lists: []
    }),
    getters: {
        todolist: (state) => state.lists
    },
    mutations: {
        todoListPush(state,payload){
            state.lists.push(payload);
        }
    },
    actions: {
        push(context,payload){
            context.commit('todoListPush',payload);
        }
    }
}

export default TodoListStore;