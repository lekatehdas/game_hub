import ApiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import { Game } from "./useGames.ts";

const apiClient = new ApiClient<Game>("/games");

export interface GameDetails {
	id: string;
	name: string;
	slug: string;
	description: string;
	description_raw: string;
}

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
