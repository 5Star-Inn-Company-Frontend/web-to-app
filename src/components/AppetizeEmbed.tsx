import { useEffect } from "react";

// types/appetize.d.ts
interface AppetizeClient {
    // Define the actual methods you expect from the client
    // Example methods - adjust based on the real API
    start: () => void;
    sendKey: (key: string) => void;
    terminate: () => void;
}

interface Appetize {
    getClient: (options: {
        publicKey: string;
        device?: string;
        orientation?: "portrait" | "landscape";
        // other options...
    }) => Promise<AppetizeClient>;
}

declare global {
    interface Window {
        appetize?: Appetize;
    }
}

function AppetizeEmbed() {
    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement("script");
            script.src = "https://js.appetize.io/embed.js";
            script.async = true;

            const firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode?.insertBefore(script, firstScript);

            const scriptLoadPromise = new Promise<void>((resolve) => {
                script.onload = () => resolve();
            });

            // Properly typed window extension
            window.appetize = {
                getClient: (options) => {
                    return scriptLoadPromise.then(() => {
                        if (window.appetize?.getClient) {
                            return window.appetize.getClient(options);
                        }
                        throw new Error("Appetize client not available");
                    });
                },
            };
        };

        loadScript();

        return () => {
            const script = document.querySelector('script[src="https://js.appetize.io/embed.js"]');
            script?.remove();
            delete window.appetize;
        };
    }, []);

    return null;
}

export default AppetizeEmbed;
