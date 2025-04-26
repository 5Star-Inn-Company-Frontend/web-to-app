import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEditorState {
    isOpen: boolean;
    content: string;
    activeEditor: string | null;
}

const initialState: IEditorState = {
    isOpen: false,
    content: "",
    activeEditor: null,
};

const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        editorClose: (state: IEditorState) => {
            state.isOpen = false;
            state.content = "";
            state.activeEditor = null;
        },
        setEditorContent: (state: IEditorState, action: PayloadAction<string>) => {
            state.content = action.payload;
        },
        editorOpen: (state: IEditorState, action: PayloadAction<string>) => {
            state.isOpen = true;
            state.activeEditor = action.payload;
        },
    },
});

export const { editorClose, editorOpen, setEditorContent } = editorSlice.actions;
export default editorSlice.reducer;
