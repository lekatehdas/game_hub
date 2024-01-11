import ApiClient from "../services/api-client.ts";
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot.ts";

const useScreenshots = (gamePk: number) => {
	const apiClient = new ApiClient<Screenshot>(`/games/${gamePk}/screenshots`);

	return useQuery({
		queryKey: ["screenshots", gamePk],
		queryFn: () => apiClient.getAll(),
	});
};

export default useScreenshots;
