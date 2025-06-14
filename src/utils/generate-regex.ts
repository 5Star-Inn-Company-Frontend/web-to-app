export function generateRegexFromUrl(url: string): string {
    try {
        const parsedUrl = new URL(url);

        // Escape dots in hostname for regex
        const hostname = parsedUrl.hostname.replace(/\./g, "\\.");

        // Optional: allow subdomains
        const regex = `https?://([-\\w]+\\.)*${hostname}/.*`;

        return regex;
    } catch (e) {
        throw new Error("Invalid URL");
    }
}
