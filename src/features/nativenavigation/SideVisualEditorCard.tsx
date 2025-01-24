import { Input } from "@/components/ui/input"
import { RiDeleteBin6Line, RiDragMove2Fill } from "react-icons/ri"

const SideVisualEditorCard = () => {
  return (
    <div className="border border-primary20 rounded-lg p-1 mb-4 last:mb-0">
    <div className="flex items-center gap-x-2 bg-deepgray py-1 px-2 rounded-md">
      <RiDragMove2Fill className="text-5xl" />
      <Input className="px-2 border-primary20" value="Label Text" />
      <Input value="https://webhosting.5starcom" className="px-2 border-primary20" />
      <RiDeleteBin6Line className="text-5xl" />
    </div>
  </div>
  )
}

export default SideVisualEditorCard