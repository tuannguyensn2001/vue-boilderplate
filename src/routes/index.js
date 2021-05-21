import routesHome from '../features/Home/routes'
import routesAbout from "../features/About/routes";
import routesTodoList from "../features/TodoList/routes";



const routes = [
    ...routesHome,
    ...routesAbout,
    ...routesTodoList
]

export default routes;