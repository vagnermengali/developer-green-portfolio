export interface AboutData {
    title: string;
    info: AboutInfo[];
}

export interface AboutInfo {
    title: string;
    stage?: string;
    icons?: React.ReactNode[];
}