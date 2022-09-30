import ShowBlog from "./components/ShowBlog";
import AddBlog from "./components/AddBlog";
import SingBlog from "./components/SingBlog";

export default [
  {path:"/",component: ShowBlog},
  {path:"/add",component: AddBlog},
  {path:"/blog/:id",component: SingBlog}
]
