import homeLogo from '../img/home.png';
import searchLogo from '../img/search.png';
import eventsLogo from '../img/events.png';

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
        icon: searchLogo,
        exact: true,
        auth: true
    },
    {
        name: 'Events',
        path: '/event',
        icon: eventsLogo,
        exact: true,
        auth: true
    },
];

export default navOptions;