export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    return date.toLocaleString("en-US", {
        month: "short", // "Apr"
        day: "2-digit", // "04"
        year: "numeric", // "2025"
        hour: "2-digit", // "11"
        minute: "2-digit", // "38"
        hour12: true, // AM/PM
    });
};

// Output: "Apr 4, 2025, 11:38 PM" (adjust formatting as needed)
