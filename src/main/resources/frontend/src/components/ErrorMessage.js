
function ErrorMessage({children}){
  return (
    <div tabIndex="0" className="error-message" id="error-message" role="alert">
      ERRORE: {children}
    </div>
  );
}

export {ErrorMessage};