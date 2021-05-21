import {useI18n} from "vue-i18n";

const useLocalization = () => {
    const {t:trans} = useI18n();

    return {trans};
}

export default useLocalization;