import { ReactNode } from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import Sidebar from './sidebar';

// export const DashBoardLayout = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <div className="h-full">
//       <div className="">
//         <Navbar />
//       </div>
//       {/* <div className="w-full h-full"> */}
//         <div className="flex h-screen">
//           <div className='w-64'>
//             {/* <SideNav style="relative desktopNav overflow-auto dark:bg-zinc-800 bg-white me-2 me-1" /> */}
//             <SideNav style='w-64 h-full'/>
//           </div>
//           <div className="w-full h-full block">
//             {/* <SideNav /> */}
//             <div className='lg:border-l lg:border-primary20'>
//               <div className="pb-14 flex flex-col justify-between md:h-screen h-auto pt-4 px-3 lg:px-8">
//                 {children}
//               </div>
//             </div>
//           </div>
//         {/* </div> */}
//       </div>

//       <div></div>
//     </div>
//   );
// };



interface DashBoardLayoutProps {
  children: ReactNode
}


const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  
  return (
    <div>
      <Navbar />
      <div className="flex h-screen overflow-hidden p-6">
        {/* Sidebar */}
        <Sidebar/>
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar rounded-r-md bg-white">
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardLayout