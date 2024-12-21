import { SimulationView } from '@/components/global/simulationview';
import { Text } from '@/components/global/text';
import { Button } from '@/components/ui/button';
import { AiOutlineMore } from 'react-icons/ai';
import { AppLayout } from '../app-layout';
import { TopNav } from '@/components/global/topnav';

export const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="mb-0">
        <TopNav />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 w-full">
        <div className="lg:col-span-3 col-span-1 md:p-[2rem] p-[0.5rem] bg-[#F2F2F2]">
          <div className="flex justify-between flex-wrap sm:col  pb-4 px-2" style={{display: "flex",  }}>
            <div className="flex gap-2 items-center text-lg font-semibold">
              <div className=" w-[3rem] h-[3rem] relative">
                <img
                  src="/brand_icon.png"
                  alt="object not found"
                  className="w-full"
                />
              </div>
              WebHosting App
            </div>
            <div className="flex ml-auto gap-4 items-center">
              <Text style="text-xs text-[grey]" value="Last saved 12days ago" />
              <Button className="bg-black">Done Editing</Button>
              <div className="bg-white p-2 rounded-md">
                <AiOutlineMore size="1.2rem" />
              </div>
            </div>
          </div>
          <AppLayout>{children}</AppLayout>
        </div>
        <SimulationView />
      </div>
    </div>
  );
};
