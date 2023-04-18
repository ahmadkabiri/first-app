import { useState, useRef, useEffect } from "react";
// import "./App.css";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);

  let pagSize = 10;
  let pageNumbers = null;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas);

        let endIndex = pagSize * currentPage;
        let startIndex = endIndex - pagSize;
        let allShownTodos = datas.slice(startIndex, endIndex);

        setPaginatedTodos(allShownTodos);
      });
  }, []);

  useEffect(()=>{
    
        let endIndex = pagSize * currentPage;
        let startIndex = endIndex - pagSize;
        let allShownTodos = todos.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos)

  },[currentPage])

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const pagesCount = Math.ceil(todos.length / pagSize);

  pageNumbers = Array.from(Array(pagesCount).keys());

  console.log(pageNumbers);

  return (
    <div>
      {!todos ? (
        "Loadding"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td
                  className={
                    todo.completed ? "btn btn-success" : "btn btn-danger"
                  }
                >
                  {todo.completed ? "Completed" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="d-flex justify-content-center">
        <ul class="pagination" aria-current="page">
          {pageNumbers.map((pageNumber) => (
            <li
              class={
                pageNumber + 1 === currentPage
                  ? "page-item active"
                  : "page-item"
              }
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <span class="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
