import useGame from "../hooks/useGame.ts";
import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) {
		return <Spinner />;
	}

	if (error || !game) {
		throw error;
	}

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
			<GameTrailer gameId={game.id} />
		</>
	);
};

export default GameDetailPage;
