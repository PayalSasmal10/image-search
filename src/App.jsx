import { useRef } from "react";
import "./App.css";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function App() {
  const searchInput = useRef(null);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
    searchInput.current.value = null;
  };

  const fetchImages = async () => {
    try {
      const data = await fetch(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input ref={searchInput} />
    </form>
  );
}

export default App;
