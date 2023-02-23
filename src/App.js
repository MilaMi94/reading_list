import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BoookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BoookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
