
import {ref} from 'vue';

export const useTodoList = () => {
    const lists = ref(['tuấn nhokvip']);

    const addTask = value => {
        lists.value.push(value);
    }

    return {lists,addTask}



}
