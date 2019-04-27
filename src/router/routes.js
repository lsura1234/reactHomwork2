import React from 'React'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from '../pages/home'
const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Homepage} />
                
            </Router>
        </div>
    )
}

export default Routes