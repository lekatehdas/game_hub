import { Genre } from "./Genre.ts";
import { Platform } from "./Platform.ts";
import { Publisher } from "./Publisher.ts";

export interface Game {
	id: number;
	name: string;
	slug: string;
	genres: Genre[];
	description_raw: string;
	background_image: string;
	publishers: Publisher[];
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}
