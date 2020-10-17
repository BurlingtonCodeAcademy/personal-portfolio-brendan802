import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },
    {
        title: 'About Me',
        path: '/AboutMe',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },
    {
        title: 'Projects Page',
        path: '/ProjectsPage',
        icon:<IoIcons.IoMdPeople/>,
        cName: 'nav-text'

    },
    {
        title: 'Resume/Work',
        path: '/WorkHistory',
        icon:<IoIcons.IoIosPaper/>,
        cName: 'nav-text'

    },
    {
        title: 'Hobbies',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },
]

