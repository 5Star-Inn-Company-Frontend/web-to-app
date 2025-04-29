import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store.ts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
