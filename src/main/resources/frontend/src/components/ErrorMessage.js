import {useEffect} from "react";


function ErrorMessage({children}){
  useEffect((asd) => {
    document.getElementById("error-message").focus();
  });

  return (
    <div tabIndex="0" className="error-message" id="error-message">
      ERRORE: {children}
    </div>
  );
}

export {ErrorMessage};