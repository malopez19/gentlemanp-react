import { useRef } from "react";

export const BookReader = () => {
  const pageRef = useRef<number>(1);

  const handleNextPage = () => {
    if (pageRef.current === 10) {
      console.log("You are in the last page");
      return;
    }

    pageRef.current += 1;
    console.log("avanzaste a la pagina: ", pageRef.current);
  }

  const handlePrevPage = () => {
    if (pageRef.current === 1){
      console.log("You are in the first page");
      return;
    } 

    pageRef.current -= 1;
    console.log("retrocediste en la pagina: ", pageRef.current);
  }

  const handleGotoPage = (page: number) => {
    if(page < 1 || page > 10) {
      console.log("Invalid page number");
      return;
    }

    pageRef.current = page; 
    console.log("Estas en la pagina: ", pageRef.current);
  }
  return (
    <>
      <h1>Book Reader</h1>
      <p>Current Page: {pageRef.current}</p>
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
      <button onClick={() => handleGotoPage(10)}>Go to Page 10</button>
    </>
  )
}
