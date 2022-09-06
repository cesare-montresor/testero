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
      <main className="page-centered-container">
        <div>
          <h1 tabIndex="0">Errore 404: Pagina non trovata</h1>
          <ul className="page-nopage-main btn-bar">
            <li><button onClick={goBack}>Torna indietro</button></li>
            <li><button onClick={goHome}>Torna alla homepage</button></li>
          </ul>
        </div>
      </main>
  );
}

export {NoPage};