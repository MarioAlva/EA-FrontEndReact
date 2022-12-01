import homeLogo from '../img/home.png';
import EventArrow from '../img/EventArrow.png';

const navOptions = [
    {
        name: 'Home',
        path: '/',
        icon: homeLogo,
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