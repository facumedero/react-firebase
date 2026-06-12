import { useEffect, useState } from "react";
import { createItem, deleteBook, getBooks,updateBook } from "./services/api";

const App = () => {
  const [title, setTitle] = useState();
  const [books, setBooks] = useState([]);
  const [id, setIds] = useState([]);

  useEffect(() => {
    showBooks();
  }, []);

  const showBooks = () => {
    getBooks().then((data) => setBooks(data));
  };

  return (
    <>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <input
        type="text"
        onChange={(e) => setIds(e.target.value)}
        placeholder="id"
      />
      <button
        onClick={async () => {
          await createItem({ title });
          showBooks();
        }}
      >
        Insert Book
      </button>

      <button
        onClick={async () => {
          await deleteBook(id);
          showBooks();
        }}
      >Delete Book</button>


      <button
        onClick={async () => {
          await updateBook( id, { title });
          showBooks();
        }}
      >Update Book</button>

      <table border="1px">
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
