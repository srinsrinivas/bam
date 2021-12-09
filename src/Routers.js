import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './welcomepage';
import MemberSearch from './MemberSearch'
import Landingpage from './Landingpage'
import App from './App'
import Welcomepage from './welcomepage';
const Routing = ()=>{
    return(
        <div>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<App/>} /> 
                <Route path="/welcomepage"  element={<Welcomepage/>} /> 
                {/*<Route path="/MemberSearch"  element={<MemberSearch/>} /> */}
                { /*<Route path="/Landingpage"  element={<Landingpage/>} /> */}
                {/* <Route path="/claims" exact component={Claims} />
                <Route path="/coverage" exact component={Coverage} />
                <Route path="/spending" exact component={Spending} />
                <Route path="/findCare" exact component={FindCare} />
                <Route path="/wellness" exact component={Wellness} />
                <Route path="/ca" exact component={CA} /> */}
                
            </Routes>
            </BrowserRouter>
            </div>
    )
}
export default Routing;