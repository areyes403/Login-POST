import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const Test = lazy(() => import('./components/prueba'));
const ClassComp = lazy(() => import('./components/classComp'));

function App() {


    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Test} />
                    <Route exact path="/comp" component={ClassComp} />
                </Switch>
            </Suspense>
        </Router>
    );

}




export default App;
