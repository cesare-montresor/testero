import {useNavigate} from "react-router-dom";


function NoPage (){
  let navigate = useNavigate();

    function goBack(){
        navigate(-1);
    }

    function goHome(){
        navigate("/");
    }

  return (
      <div role="main" id="main" className="page-centered-container" tabIndex="-1" aria-labelledby="pageNotFound-title">
        <div>
          <h1 id="pageNotFound-title">Errore 404: Pagina non trovata</h1>
          <ul className="page-nopage-main btn-bar">
            <li><button onClick={goBack}>Torna indietro</button></li>
            <li><button onClick={goHome}>Torna alla homepage</button></li>
          </ul>
        </div>
      </div>
  );
}

export {NoPage};