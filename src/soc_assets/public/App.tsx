import React from 'react';
import { Create } from './components/Create';
import NewUser from './components/NewUser';
import './App.css';
import {
    HashRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Create />
                </Route>
            </Switch>
        </Router>
    );
}
export default App
