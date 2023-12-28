import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from "ms";

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
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
