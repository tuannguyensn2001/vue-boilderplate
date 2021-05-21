const TodoListStore = {
    namespace: true,
    state: () => ({
        lists: []
    }),
    getters: {
        todolist: (state) => state.lists
    },
    mutations: {
        push(state,payload){
            state.lists.push(payload);
        }
    },
    actions: {
        push(context,payload){
            context.commit('push',payload);
        }
    }
}

export default TodoListStore;