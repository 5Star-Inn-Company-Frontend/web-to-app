
const MemberAction = () => {
  return (
    <div className="flex items-center justify-between">
          <button className="flex items-center gap-x-3 py-2 px-4 rounded-lg bg-lightpink">
            <img src="/bucket.svg" alt="" className="h-5 w-5" />
            <span>Delete Account</span>
          </button>
          <button className="bg-primary100 text-white px-6 py-2 rounded-lg">Save changes</button>
        </div>
  )
}

export default MemberAction