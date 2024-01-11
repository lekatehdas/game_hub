import useScreenshots from "../hooks/useScreenshots.ts";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
	gamePk: number;
}

const GameScreenshots = ({ gamePk }: Props) => {
	const { data, isLoading, error } = useScreenshots(gamePk);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3 }}
			spacing={6}
			padding={"10px"}
		>
			{data?.results.map((screenshot) => (
				<Image key={screenshot.id} src={screenshot.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
