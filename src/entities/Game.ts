import { Genre } from "./Genre.ts";
import { Platform } from "./Platform.ts";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genre: Genre;
	rating_top: number;
	slug: string;
	description_raw: string;
}
