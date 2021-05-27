import axios from "axios";
import { useQuery } from "vue-query";

const useTodo = () => {
  const query = useQuery("todos", async () => {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return todos.data;
  });

  return query;
};
export default useTodo;
