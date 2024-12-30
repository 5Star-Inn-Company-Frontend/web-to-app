import { Navbar } from "@/components/Navbar"
import MemberForm from "./MemberForm"
import ChangePassword from "./ChangePassword"
import Organization from "./Organization"
import MemberAction from "./MemberAction"

const MemberAccount = () => {
  return (
    <>
      <Navbar />
      <div className="container bg-white rounded-lg pt-10 pb-40 w-1/2 items-start my-[3.125rem]">
        <h2 className="font-semibold mb-5">My Account</h2>
        <MemberForm/>
        <ChangePassword/>
        <Organization/>
        <MemberAction/>
      </div>
    </>
  )
}

export default MemberAccount