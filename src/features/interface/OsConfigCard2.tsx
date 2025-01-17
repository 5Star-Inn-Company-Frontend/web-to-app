import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FaAndroid, FaApple } from "react-icons/fa6"

export const OsConfigCard2 = ({
  os,
  radios,
  children,
}: {
  os: "IOS" | "Android" | "IOS and Android",
  children?: React.ReactNode,
  radios?: {
    title: string,
    label: string
  }[]
}) => {
  return (
    <div className="border rounded-lg">
      <div className="flex gap-2 px-6 py-2 border-b items-center rounded-t-md text-xs">
        {
          os === "IOS" ? (
            <FaApple size="1.3rem" />
          ) : os === "Android" ? (
            <FaAndroid size="1.3rem" />
          ) : <div className="flex gap-4 items-center"><FaApple size="1.3rem" /><FaAndroid size="1.3rem" /></div>
        }
        {os}
      </div>
      {
        radios && (
          <RadioGroup
            className="flex text-xs flex-col p-[0.7rem] flex-grow rounded-md"
            defaultValue="auto">
            <div className="flex items-center space-x-3 mb-1">
              <RadioGroupItem value="auto" id="r1" />
              <Label className="text-xs text-primary40" htmlFor="auto">Auto(Light & Dark)</Label>
            </div>
            <div className="flex items-center space-x-3 mb-1">
              <RadioGroupItem value="portrait" id="r2" />
              <Label className="text-xs text-primary40" htmlFor="portrait">Light</Label>
            </div>
            <div className="flex items-center space-x-3 mb-1">
              <RadioGroupItem value="landscape" id="r2" />
              <Label className="text-xs text-primary40" htmlFor="Landscape">Dark</Label>
            </div>
          </RadioGroup>
        )
      }{
        children && <div>{children}</div>
      }
    </div>
  )
}