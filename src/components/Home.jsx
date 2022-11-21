import Navbar from "./Navbar"
import {Outlet} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Sup</h1>
            <Navbar />
            <div id='detail'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Home