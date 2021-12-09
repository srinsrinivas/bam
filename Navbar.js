import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link to="/claims"><li>Claims</li></Link>
                <Link to="/coverage"><li>Coverage</li></Link>
                <Link to="/spending"><li>Spending</li></Link>
                <Link to="/findCare"><li>Find Care</li></Link>
                <Link to="/wellness"><li>Wellness</li></Link>
                <Link to="/ca"><li>CA</li></Link>

            </ul>
            
        </div>
    )
}

export default Navbar
