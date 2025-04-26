import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEditorState {
    ios: {
        isOpen: boolean;
        cssContent: string;
        isLoading: boolean;
    };

    android: {
        isOpen: boolean;
        cssContent: string;
        isLoading: boolean;
    };
    jsIos: {
        isOpen: boolean;
        jsContent: string;
    };
    jsAndroid: {
        isOpen: boolean;
        jsContent: string;
    };
    // googleServiceInfo: {};
    // gooleServiceJson: {};
    isOpen: boolean;
    content: string;
    activeEditor: string | null;
}

const initialState: IEditorState = {
    ios: {
        isOpen: false,
        cssContent: "",
        isLoading: false,
    },

    android: {
        isOpen: false,
        cssContent: "",
        isLoading: false,
    },
    jsIos: {
        isOpen: false,
        jsContent: "",
    },
    jsAndroid: {
        isOpen: false,
        jsContent: "",
    },

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

        openeditor: (state: IEditorState) => {
            state.ios.isOpen = true;
        },
        closeeditor: (state: IEditorState) => {
            state.ios.isOpen = false;
        },
        openEditor: (state: IEditorState) => {
            state.ios.isOpen = true;
        },
        closeEditor: (state: IEditorState) => {
            state.ios.isOpen = false;
        },
        setCssContent: (state: IEditorState, action: PayloadAction<string>) => {
            state.ios.cssContent = action.payload;
        },
        setLoading: (state: IEditorState, action: PayloadAction<boolean>) => {
            state.ios.isLoading = action.payload;
        },
        openEditorAndroid: (state: IEditorState) => {
            state.android.isOpen = true;
        },
        closeEditorAndroid: (state: IEditorState) => {
            state.android.isOpen = false;
        },
        setCssContentAndroid: (state: IEditorState, action: PayloadAction<string>) => {
            state.android.cssContent = action.payload;
        },
        setLoadingAndroid: (state: IEditorState, action: PayloadAction<boolean>) => {
            state.android.isLoading = action.payload;
        },
        openEditorJSAndroid: (state: IEditorState) => {
            state.jsAndroid.isOpen = true;
        },
        closeEditorJSAndroid: (state: IEditorState) => {
            state.jsAndroid.isOpen = false;
        },
        setCssContentJSAndroid: (state: IEditorState, action: PayloadAction<string>) => {
            state.jsAndroid.jsContent = action.payload;
        },
        openEditorJSIos: (state: IEditorState) => {
            state.jsIos.isOpen = true;
        },
        closeEditorJSIos: (state: IEditorState) => {
            state.jsIos.isOpen = false;
        },
        setCssContentJSIos: (state: IEditorState, action: PayloadAction<string>) => {
            state.jsIos.jsContent = action.payload;
        },
    },
});

export const {
    openEditor,
    closeEditor,
    setCssContent,
    setLoading,
    openEditorAndroid,
    closeEditorAndroid,
    setCssContentAndroid,
    setLoadingAndroid,
    setCssContentJSAndroid,
    setCssContentJSIos,
    openEditorJSAndroid,
    openEditorJSIos,
    closeEditorJSAndroid,
    closeEditorJSIos,
    openeditor,
    closeeditor,
    editorClose,
    editorOpen,
    setEditorContent,
} = editorSlice.actions;
export default editorSlice.reducer;
