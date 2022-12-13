import homeLogo from '../img/home.png';
import Loginlogo from '../img/login.png';
import EventArrow from '../img/EventArrow.png';
import profileimg from '../img/profileimg.png';
import searchLogo from '../img/search.png';
import eventsLogo from '../img/events.png';

const navOptions = [
    {
        name: 'Home',
        path: '/',
        icon: homeLogo,
        exact: true,
		auth: false
    },
    {
        name: 'Search',
        path: '/search',
        icon: searchLogo,
        exact: true,
        auth: false
    },
    {
        name: 'Events',
        path: '/event',
        icon: eventsLogo,
        exact: true,
        auth: false
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: profileimg,
        exact: true,
        auth: true
    }
];

export default navOptions;