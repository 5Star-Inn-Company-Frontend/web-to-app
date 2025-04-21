export interface IBuildSettings {
    appIdentifiers: {
        ios: {
            bundleId: string;
        };
        android: {
            packageName: string;
            version: string;
        };
    };
    downloadLinks: {
        androidLink: string;
        androidAppBundleLink: string;
        androidSource: string;
        iosSource: string;
        iosLink: string | null;
    };
    androidLastBuiltDate: {
        binary: string;
        source: string;
    };
    iosLastBuiltDate: {
        binary: string;
        source: string;
    };
    androidLastBuiltBy: {
        source: string;
        sourceBuiltBySuperUser: boolean;
        binary: string;
    };
    iosLastBuiltBy: {
        source: string;
        sourceBuiltBySuperUser: boolean;
        binary: string;
    };
    androidReleaseSigningCertificate: {
        sha1: string | null;
        sha256: string | null;
        hash: string | null;
    };
    google_service: {
        android: string;
        ios: string;
    };
}
