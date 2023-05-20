import './SideBar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <Link to="/">
                <img src="/img/beer.png" alt="beer"/>
            </Link>
            <p7>Ravendawn Tavern</p7>
            <Link to="/hunts">
                <i className="fas fa-search"></i>
            </Link>
            <p7>Hunts</p7>
            <Link to="/events">
                <i className="far fa-calendar-alt"></i>
            </Link>
            <p7>Events</p7>
            <a href="https://ravendawndb.com" target='blank'>
                <i className="fas fa-database"></i>
            </a>
            <p7>DataBase</p7>
        </div>
    );
};

export default Sidebar;
