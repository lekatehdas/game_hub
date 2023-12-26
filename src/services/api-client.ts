import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

const axtiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "78825f15cd974fa2a6c80f144849e4bf",
	},
});

class ApiClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axtiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default ApiClient;
