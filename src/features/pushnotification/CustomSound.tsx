import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomSoundProps {
    title: string;
}
export default function CustomSound({ title }: CustomSoundProps) {
    return (
        <div className="px-5 py-4 flex items-center gap-x-10">
            <span className="text-xs text-primary60">{title}</span>
            <Label htmlFor="picture" className="border cursor-pointer py-3 px-8 text-xs rounded-2xl">
                Upload
            </Label>
            <Input id="picture" type="file" className="hidden" />
        </div>
    );
}
