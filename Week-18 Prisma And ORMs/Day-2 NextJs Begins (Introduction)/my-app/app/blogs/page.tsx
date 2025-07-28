import axios from "axios";

interface Itodo {
  id: number;
  title: string;
  completed: boolean;
}

async function getblogs() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return response.data;
}

function Todo({ title, completed }: { title: string; completed: boolean }) {
  return (
    <div>
      {title} — {completed ? "done" : "not done"}
    </div>
  );
}

export default async function Blogs() {
  const blogs = await getblogs();

  return (
    <div>
      {blogs.map((blog: Itodo) => (
        <Todo key={blog.id} title={blog.title} completed={blog.completed} />
      ))}
    </div>
  );
}
