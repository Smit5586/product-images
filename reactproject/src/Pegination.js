import React from 'react'

const Pegination = ({totalPosts,postPerPages,setCurrentPage}) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts/postPerPages); i++) {
        pages.push(i)
        
    }
  return (
    <div>
      {pages.map((page,ind)=>{
        return(
            <>
                <button key={ind} onClick={() =>setCurrentPage(page) } className="buttons">{page}</button>
                
            </>
        )
      })}
    </div>
  )
}

export default Pegination
