import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon:<FaIcons.FaCampground/>,
        cName: 'nav-text'

    },
    {
        title: 'About Me',
        path: '/AboutMe',
        icon:<FaIcons.FaCloudSun/>,
        cName: 'nav-text'

    },
    {
        title: 'Projects',
        path: '/ProjectPage',
        icon:<IoIcons.IoMdPeople/>,
        cName: 'nav-text'

    },
    {
        title: 'Work',
        path: '/WorkHistory',
        icon:<FaIcons.FaBalanceScale/>,
        cName: 'nav-text'

    },
    {
        title: 'Interests',
        path: '/Hobbies',
        icon:<FaIcons.FaPastafarianism/>,
        cName: 'nav-text'

    },
]

