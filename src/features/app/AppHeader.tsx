

interface AppHeaderProps {
    logo:string;
    title:string;
}
const AppHeader = ({logo, title}: AppHeaderProps) => {
  return (
    <div className="flex items-center gap-5">
        <img src={logo} alt="" className="w-9 h-9 object-cover" />
        <h1 className="text-base font-medium">{title}</h1>
      </div>
  )
}

export default AppHeader