import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client.ts";

import genres from "../data/genres.ts";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery<FetchResponse<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, // 24h
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
