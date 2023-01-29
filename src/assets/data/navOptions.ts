import homeLogo from '../img/home.png';
import Loginlogo from '../img/login.png';
import EventArrow from '../img/EventArrow.png';
import profileimg from '../img/profilelogo.png';
import searchLogo from '../img/search.png';
import eventsLogo from '../img/events.png';
import reportLogo from '../img/reportimg.png';
import jwt_decode from "jwt-decode";

interface MyToken {
    id: string;
    email: string;
    iat: number;
    exp: number;
  }
let idUser;
try{
	const token = localStorage.getItem('token')!;
	let decoded = jwt_decode(token) as MyToken;
	idUser = decoded.id;
}
catch{
	idUser = "";
}
import configLogo from '../img/configurationlogo.png';
import { useTranslation } from 'react-i18next';

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
        path: '/profile/' + idUser,
        icon: profileimg,
        exact: true,
        auth: true
    },
    {
        name: 'Report',
        path: '/report',
        icon: reportLogo,
        exact: true,
        auth: true
    },
    {
        name: 'Configurations',
        path: '/config',
        icon: configLogo,
        exact: true,
        auth: true
    },
];

export default navOptions;