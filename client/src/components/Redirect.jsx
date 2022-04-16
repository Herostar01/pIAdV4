import React, { useEffect } from "react";

const Redirect = ( {url} ) => {
   
   useEffect(() => {
      window.location.href = url;
   }, [url]);

   return <h1 className="gold">Redirecting...</h1>;
};

export default Redirect;
