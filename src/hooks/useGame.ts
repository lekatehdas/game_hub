import ApiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";

import Game from "../entities/Game.ts";

const apiClient = new ApiClient<Game>("/games");

const useGame = (slug: string) =>
	useQuery({
		queryKey: ["games", slug],
		queryFn: () => apiClient.get(slug),
	});

export default useGame;
