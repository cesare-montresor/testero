import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import { TesteroAPI } from './testero-api.js'
const api = new TesteroAPI();
api.hi();


import './index.css';

/*
graphql-language-service-interface
graphql-language-service-parser
graphql-language-service
*/


class TesteroApp extends React.Component{

    render(){
        return (
            <Router>
                <div className='page-main'>
                    <div className='page-title'>Testero&#8482;</div>
                    <NavBar/>
                    <div className='page-content'>
                        <Routes>
                            <Route exact path="/" element={ <TestList/> } />
                            <Route exact path="/addTest"  element={  <TestAdd/> } />
                            <Route exact path="/takeTest" element={ <TestTake/> } />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

class NavBar extends React.Component{
    render(){
        return (
            <div className='menu-main btn-bar'>
                <Link to="/"> Test List </Link>
                <Link to="/addTest"> Add Test </Link>
            </div>
        );
    }
}



class TestList extends React.Component{
    render(){
        return (
            <div className='test-list'>
                Lit of available tests.
                <div className='test-list-row'>
                    <div className='test-list-row-name'>this is a test</div>
                    <div className='test-list-row-actions btn-bar'>
                        <Link to="/takeTest"> take test </Link>
                    </div>
                </div>
            </div>
        );
    }
}


class TestAdd extends React.Component{
    saveTest(){
        const api = new TesteroAPI();
        api.addTest("nomeeee" , true, false);
        alert(1);
    }

    render(){
        return (
            <div className='test-add'>
                <div className='test-add-main'>
                    <div className='test-add-main-nome'>
                        <label ref="test-name">Nome</label>
                        <input type="text" name="test-name" id="test-name"/>
                    </div>
                    <div className='test-add-main-order'>
                        <label ref="test-order">Ordine Casuale</label>
                        <input type="checkbox" name="test-order" id="test-order"/>
                    </div>
                    <div className='test-add-main-numbered'>
                        <label ref="test-numbered">Domanda con numero</label>
                        <input type="checkbox" name="test-numbered" id="test-numbered"/>
                    </div>

                    <div className='test-add-main-controls'>
                        <button type="button" onClick={() => this.saveTest()}>Next &rarr;</button>
                    </div>
                </div>



            </div>
        );
    }
}



class TestAddQuestion extends React.Component{
    saveTest(){
        alert(1);
    }

    render(){
        return (
            <div className='test-add'>
                <div className='test-add-main'>
                    <div className='test-add-main-nome'>
                        <label ref="test-name">Nome</label>
                        <input type="text" name="test-name" id="test-name"/>
                    </div>
                    <div className='test-add-main-order'>
                        <label ref="test-order">Ordine Casuale</label>
                        <input type="checkbox" name="test-order" id="test-order"/>
                    </div>
                    <div className='test-add-main-numbered'>
                        <label ref="test-numbered">Domanda con numero</label>
                        <input type="checkbox" name="test-numbered" id="test-numbered"/>
                    </div>
                </div>

                <div className='test-add-main-controls'>
                    <button type="button" onClick={() => this.saveTest()}>Next &rarr;</button>
                </div>

            </div>
        );
    }
}



class TestTake extends React.Component{
    render(){
        return (
            <div className='test-take'>
                <div className='test-list-row'>
                    <div className='test-list-row-name'>this is a test</div>
                    <div className='test-list-row-actions'>
                        <Link to="/takeTest"> take test </Link>
                    </div>
                </div>
            </div>
        );
    }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TesteroApp />);
