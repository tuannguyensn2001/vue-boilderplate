import { ref } from "vue";
import useLocalization from "../../../hooks/useLocalization";
import useTodo from "./useTodo";

export const useTodoList = () => {
  const { trans } = useLocalization();
  const lists = ref(["tuấn nhokvip"]);

  const { list } = usePost();

  const addTask = (value) => {
    lists.value.push(value);
  };
  const query = useTodo();
  return { lists, addTask, trans, list, query };
};

const usePost = () => {
  const list = ref("123");
  return { list };
};
