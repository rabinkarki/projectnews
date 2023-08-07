import React from 'react'
import { useGlobalContext } from './context';

 const Search = () => {
    const { hits,isloading,url  } = useGlobalContext();
  if (isloading){
    return(
      <div>
      <h1>....Loading</h1>
      </div>
    );
  }
  return (
    <>
    <div className="container">
        {hits.map((data) => {
          return (
            <>
            <div className="card">
            <h3>{data.title}</h3>
            <p>By {data.author} | {data.num_comments}Comments</p>
            <div className="card-buttons">
            <a href={data.url} target='-_blank'>Read More</a>
            <a href="" style={{color:"red"}}>Remove</a>
            </div>
            </div>
            </>
            );
        })}
      </div>
      </>
  )
}
export default Search;
