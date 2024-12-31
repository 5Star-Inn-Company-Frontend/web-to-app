

interface PopOverProps {
    toggleShowPopover: () => void;
    showPopover: boolean
    popoverTrigger?: string;
    popoverItem: { imgUrl: string; label: string; handleClick?: () => void }[]
}


const Popover = ({ toggleShowPopover, showPopover, popoverItem, popoverTrigger }: PopOverProps) => {
    return (
            <div className="relative ">
                <button onClick={toggleShowPopover} className="cursor-pointer py-3 px-4">{popoverTrigger || <img src="/3dots.svg" alt="" />}</button>
                <ul className={`absolute z-10 top-12 rounded-lg right-[50%] w-[9.4375rem] shadow-2xl grid gap-y-4 border py-4 px-2 text-[0.7rem] bg-white transition-all duration-300 ease-in-out ${showPopover ? "opacity-100" : "opacity-0"}`}>
                    {popoverItem.map((item, index) =>{ 
                        return <Li key={index} imgUrl={item.imgUrl} label={item.label} handleClick={item.handleClick} />
                    })}
                </ul>
            </div>
    )
}

export default Popover

const Li = ({ imgUrl, label, handleClick }: { imgUrl: string; label: string; handleClick?: () => void }) => {
    return (
        <li className="flex items-center gap-x-2 cursor-pointer" onClick={handleClick}>
            <img src={imgUrl} alt="" className="h-4 w-4" />
            <span className="block text-[0.7rem]">{label}</span>
        </li>
    )
}