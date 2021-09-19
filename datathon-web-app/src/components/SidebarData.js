import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'SmartDest Analysis',
    path: '/analysis',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'SmartDest Propuesta',
    path: '/propuesta',
    icon: <FaIcons.FaMoneyBill />,
    cName: 'nav-text'
  },
  {
    title: 'Ocean challenge',
    path: '/team',
    icon: <IoIcons.IoFishOutline />,
    cName: 'nav-text'
  }
];
