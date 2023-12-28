import { Genre } from "./useGenres.ts";
import { GameQuery } from "../App.tsx";
import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client.ts";
import { Platform } from "./usePlatforms.ts";
import ms from "ms";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genre: Genre;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		staleTime: ms("24h"),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});

export default useGames;
