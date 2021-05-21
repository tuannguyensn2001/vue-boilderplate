
import {ref} from 'vue';
import useLocalization from "../../../hooks/useLocalization";

export const useTodoList = () => {
    const {trans}  = useLocalization();
    const lists = ref(['tuấn nhokvip']);

    const {list} = usePost();

    const addTask = value => {
        lists.value.push(value);
    }

    return {lists,addTask,trans,list}
}

const usePost = () => {
    const list = ref('123');
    return {list}
}