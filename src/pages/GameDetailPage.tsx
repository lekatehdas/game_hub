import useGame from "../hooks/useGame.ts";
import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = () => {
	const { slug } = useParams();
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) {
		return <Spinner />;
	}

	if (error || !game) {
		throw error;
	}

	return (
		<SimpleGrid columns={{ sm: 1, md: 2 }}>
			<GridItem>
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</GridItem>

			<GridItem>
				<GameTrailer gameId={game.id} />
				<GameScreenshots gamePk={game.id} />
			</GridItem>
		</SimpleGrid>
	);
};

export default GameDetailPage;
