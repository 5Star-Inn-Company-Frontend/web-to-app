interface InitialsProps {
    name: string;
}
const Initials = ({name}: InitialsProps) => {
  return (
    <span className="w-8 h-8 bg-pinkred text-white rounded-full flex items-center justify-center mr-3">
    {getUserInitials(name)}
  </span>
  )
}

export default Initials



const getUserInitials = (name: string) => {
    const initials = name
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('');
    return initials;
  };