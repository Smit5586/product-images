import { Iphone, Perfect } from "./Iphone";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import Pegination from "./Pegination";


const Home = () => {
  const [name, setName] = useState([false]);
  const [posts,setPost] = useState([]);
  const [useSearch,setSearch] = useState("");
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(10);
 
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    
    setName(true);

    let data = await Iphone();
    if (data){
      setName(false)
      setPost(data)
  }
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  

 

  return (
    <>
    <div className="bg">
      <div className="heading">
        <h1 className="text-center">Our products</h1>
      </div>

      <div className="searchbar">
      <input  type="text" placeholder="search product" onChange={(e) => setSearch(e.target.value) }/>
      <button type="button" class="btn btn-primary">
    
  </button>
</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

          
      
{name ? (<h3>loading..</h3>) : (

           
              posts.filter((value) => {
                
                if(useSearch === "")
                {
                  return value;
                }
                else if(value.title.toLowerCase().includes(useSearch.toLowerCase())){
                  return value;
                }
                
               
              })
              .slice(firstPostIndex,lastPostIndex).map((v, index) => {
                return (
                  <>
                    <Cards
                      key={index}
                      imgsrc={v.thumbnail}
                      title={v.title}
                      id={v.id}
                    />
                    
                    
                  </>
                );     
              })
        
)}
</div>
          </div>
        </div>
      </div>
<div className="pagenum">
      <Pegination totalPosts={posts.length} postPerPages={postPerPage} setCurrentPage={setCurrentPage}/>

      </div>
</div>
      
    </>
  );
};
export default Home;
