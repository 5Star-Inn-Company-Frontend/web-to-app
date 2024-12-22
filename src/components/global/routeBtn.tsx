import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from './text';
import { Link } from 'react-router-dom';
export const RouteBtn = ({
  route,
  icon,
  name,
  pathname,
}: {
  route: string;
  icon: React.ReactNode;
  name: string;
  pathname: string;
}) => {
  const navigate = useNavigate();

  return (
    <li className="relative hover:bg-deepgray rounded-md px-1" onClick={() => navigate(`/app${route}`)}>
      <Link
        className={`${
          pathname === `/app${route}` ? 'bg-deepgray px-1' : ''
        } group flex h-12 cursor-pointer items-center truncate rounded-[5px] px-0.1 py-4 text-[0.975rem] text-gray-700 outline-none transition duration-300 ease-linear hover:text-[red]-600 hover:outline-none focus:bg-[red]-400/10 focus:text-[red]-600 focus:outline-none active:bg-[red]-400/10 active:text-[red]-600 active:outline-none data-[te-sidenav-state-active]:text-[red]-600 data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10`}
        to="#"
        data-te-sidenav-link-ref
      >
        <div className=" w-[2rem] h-[2rem] relative me-4">
          <img src={`/${icon}`} alt="object not found" className="w-full" />
        </div>
        <Text
          style={`${
            pathname === `/dashboard${route}` ? 'text-[#064e3b]' : 'text-black'
          } text-lg`}
          value={name}
        />
      </Link>
    </li>
  );
};
