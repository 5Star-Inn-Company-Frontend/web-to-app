import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Text } from './global/text';

interface RouteBtnProps {
  route: string;
  icon: React.ReactNode;
  name: string;
}

const RouteLink = ({ route, icon, name}: RouteBtnProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {pathname} = location;

  return (
    <li className="relative hover:bg-deepgray rounded-md px-4" onClick={() => navigate(`/${route}`)}>
      <Link
        className={`${pathname === `/${route}` ? 'bg-deepgray' : ''
          } group flex items-center h-12 cursor-pointer truncate rounded-[5px] py-4 text-sm text-gray-700 outline-none transition duration-300 ease-linear hover:text-[red]-600 hover:outline-none focus:bg-[red]-400/10 focus:text-[red]-600 focus:outline-none active:bg-[red]-400/10 active:text-[red]-600 active:outline-none data-[te-sidenav-state-active]:text-[red]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
        to="#"
        data-te-sidenav-link-ref
      >
        <div className=" w-5 h-5 flex items-center mr-5">
          <img src={`/${icon}`} alt="object not found" className="w-full" />
        </div>
        <Text
          style={`${pathname === `/dashboard${route}` ? 'text-[#064e3b]' : 'text-black'
            } `}
          value={name}
        />
      </Link>
    </li>
  );
};


export default RouteLink