export type Platform = "windows" | "linux" | "mac";
export type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18";

export type GameDetailsProps = {
    platforms: Platform[];
    developer: string;
    publisher: string;
    releaseDate: string;
    rating: Rating;
    genres: string[];
};
