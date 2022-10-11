import axios from "axios";

const baseURL = "https://dummyjson.com/products";

const Iphone = async () => {
  let list = await axios.get(baseURL);

  if (list) {
  return list.data.products
  } else {
    return false;
  }
};


const Perfect = async (id)=> {
  let list2 = await axios.get(`${baseURL}/${id}`);

  if(list2){
    return list2.data
  }else{
    return false
  }
}

export {Iphone,Perfect} ;