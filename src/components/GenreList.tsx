import useGenres from "../hooks/useGenres.ts";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store.ts";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();
	const setGenreId = useGameQueryStore((s) => s.setGenreId);
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize={"2xl"} marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit={"cover"}
								src={getCroppedImageUrl(genre.image_background)}
							/>

							<Button
								whiteSpace={"normal"}
								textAlign={"left"}
								fontWeight={
									genre.id === genreId ? "bold" : "normal"
								}
								onClick={() => setGenreId(genre.id)}
								fontSize="lg"
								variant="link"
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
