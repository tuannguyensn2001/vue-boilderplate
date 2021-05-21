import {createI18n} from "vue-i18n";
import vi from './vi/index';


const messages = {
    // vi: {
    //     todolist: {
    //         index: 'Danh sách làm việc'
    //     }
    // }
    vi
}

const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    messages
})


export default i18n;