import { Input } from "../ui/input";


interface IconInputProps {
  defaultValue?: string;
  placeHolder: string;
  type: string;
  style?: string;
  category: "formInput" | "planeInput";
  field?: any;
}

export const IconInput = ({ placeHolder, defaultValue, type, style, category, field,}: IconInputProps) => {
  return (
    <div className="relative flex items-center">
      <div className="w-full">
        {category === "formInput" ? (
          <Input
            placeholder={placeHolder}
            {...field}
            type={type}
            className={`${style ? style : ''} h-12 px-3 w-full block`}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            placeholder={placeHolder}
            type={type}
            className={`${style ? style : ''}  h-12 px-3 w-full block`}
            defaultValue={defaultValue}
          />
        )}
      </div>
    </div>
  );
};
