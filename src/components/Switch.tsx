import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface SwitchDemoProps {
    text: string;
}

export function SwitchDemo({text}: SwitchDemoProps) {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">{text}</Label>
      <Switch id="airplane-mode" />
    </div>
  )
}
