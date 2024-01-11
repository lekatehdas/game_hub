import ApiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer.ts";

const useTrailers = (gameId: number) => {
	const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

	return useQuery({
		queryKey: ["gameMovies", gameId],
		queryFn: () => apiClient.getAll(),
	});
};

export default useTrailers;
