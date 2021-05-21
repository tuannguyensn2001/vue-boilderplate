import {getAllPosts} from "../respoitories";
import {reactive} from 'vue';

export const usePosts = () => {
    const state = reactive({
        lists: [],
    });

    getAllPosts()
        .then(response => {
            state.lists = response;
        })
        .catch(err => console.log(err));


    return {state};
}