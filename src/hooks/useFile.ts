import { setEditorContent } from "@/redux/editor/editorSlice";
import { useAppDispatch } from "@/redux/hook";
import { useQuery } from "@tanstack/react-query";

interface IUseFile {
    queryKey: string[];
    url: string;
}

export default function useFile({ queryKey, url }: IUseFile) {
    const dispatch = useAppDispatch();
    const { data, refetch, isLoading, error } = useQuery({
        queryKey,
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        },
        enabled: false,
    });

    const fetchData = async () => {
        const { data } = await refetch();
        if (data) {
            dispatch(setEditorContent(data));
        }
    };

    return { fetchData, isLoading, error, data };
}
