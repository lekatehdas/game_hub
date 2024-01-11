import useTrailers from "../hooks/useTrailers.ts";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailers(gameId);
	if (isLoading) return null;

	if (error) throw error;

	const first = data?.results[0];
	return first ? (
		<video controls src={first.data["max"]} poster={first.preview}></video>
	) : null;
};

export default GameTrailer;
