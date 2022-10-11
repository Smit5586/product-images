import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Table = async () => {
  let list = await axios.get(baseURL);

  if (list) {
    return list.data;
  } else {
    return false;
  }
};

export default Table;
