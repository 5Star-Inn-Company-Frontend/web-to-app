// utils/cssFileHandler.ts
export function createCssFile(content: string, filetype: string, filename: string): File {
    const blob = new Blob([content], { type: `${filetype}` });
    return new File([blob], `${filename}`, { type: `${filetype}` });
}
