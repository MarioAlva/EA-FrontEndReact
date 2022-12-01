import homeLogo from '../img/home.png';
import EventArrow from '../img/EventArrow.png';
import Loginlogo from '../img/Loginlogo.png';

const navOptions = [
    {
        name: 'Home',
        path: '/',
        icon: homeLogo,
        exact: true,
		auth: true
    },
    {
        name: 'Search',
        path: '/search',
        icon: EventArrow,
        exact: true,
        auth: true
    },
    {
        name: 'Log in',
        path: '/login',
        icon: Loginlogo,
        exact: true,
		auth: true
    },
    {
        name: 'Create Event',
        path: '/create-event',
        icon: EventArrow,
        exact: true,
        auth: true
    },
    {
        name: 'Events',
        path: '/event',
        icon: EventArrow,
        exact: true,
        auth: true
    },
];

export default navOptions;