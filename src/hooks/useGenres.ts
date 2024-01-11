import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client.ts";
import genres from "../data/genres.ts";
import ms from "ms";
import Genre from "../entities/Genre.ts";

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
	useQuery<FetchResponse<Genre>, Error>({
		queryKey: ["genres"],
		queryFn: apiClient.getAll,
		staleTime: ms("24h"),
		initialData: genres,
	});

export default useGenres;
