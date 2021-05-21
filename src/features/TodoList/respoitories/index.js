// import {fetchAllPost} from '../services';
import NullError from "../../../exceptions/NullError";

export const getAllPosts = async () => {
    throw new NullError('có lỗi');
    // try {
    //     const response = await fetchAllPost();
    //     const {data} = response;
    //
    //     return data.map(item => {
    //         return {
    //             ...item,
    //             number: `${item.id}-${item.userId}`
    //         }
    //     });
    // } catch (e){
    //     throw new NullError('có lỗi');
    // }

}




