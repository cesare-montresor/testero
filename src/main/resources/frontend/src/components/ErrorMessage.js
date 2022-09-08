import {useEffect} from "react";


function ErrorMessage({children}){
  return (
    <div className="error-message" id="error-message" role="alert">
      ERRORE: {children}
    </div>
  );
}

export {ErrorMessage};