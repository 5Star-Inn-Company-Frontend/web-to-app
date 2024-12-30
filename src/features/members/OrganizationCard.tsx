import { useState } from "react";

interface OrganizationCardProps {
  teamName: string;
}

const OrganizationCard = ({ teamName }: OrganizationCardProps) => {
  const [showMore, setShowMore] = useState(false)
  const toggleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <div className="flex items-center justify-between bg-deepgray py-4 px-4 rounded-md">
      <h6>{teamName}</h6>
      <div className='flex items-center gap-x-5'>
        <div className="relative">
          <button className="bg-black rounded-lg px-4 py-2 text-white">View</button>
          <ul className={`absolute z-10 top-12 rounded-lg right-[50%] translate-x-1/2 w-[8rem] shadow-2xl grid gap-y-4 border py-4 px-2 text-[0.7rem] bg-white transition-all duration-300 ease-in-out ${showMore ? "opacity-100" : "opacity-0"}`}>
            <li className="cursor-pointer">Settings</li>
            <li className="cursor-pointer">Leave Organization</li>
          </ul>
        </div>
        <button onClick={toggleShowMore} className="cursor-pointer py-2 px-4"><img src="/3dots.svg" alt="" /></button>
      </div>
    </div>
  )
}

export default OrganizationCard