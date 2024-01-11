import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

const GameGrid = () => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) ||
		0;

	return (
		<InfiniteScroll
			next={() => fetchNextPage()}
			hasMore={!!hasNextPage}
			loader={<Spinner />}
			dataLength={fetchedGamesCount}
		>
			<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={6} padding={"10px"}>
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<Link key={game.id} to={`/games/${game.slug}`}>
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							</Link>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
