import {Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatFormSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const handleSelectedGenre = (genre: Genre) => {
        setGameQuery({...gameQuery, genre})
    }

    return <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
        templateColumns={{
            base: '1fr',
            lg: '200px 1fr'
        }}
    >
        <GridItem area='nav'>
            <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>

        <Show above="lg">
            <GridItem area='aside' paddingX={5}>
                <GenreList onSelectGenre={handleSelectedGenre} selectedGenre={gameQuery.genre}/>
            </GridItem>
        </Show>

        <GridItem area='main'>
            <Box paddingLeft={2}>
                <GameHeading gameQuery={gameQuery}/>
                <Flex marginBottom={5}>
                    <Box marginRight={5}>
                        <PlatFormSelector selectedPlatform={gameQuery.platform}
                                          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    </Box>
                    <SortSelector sortOrder={gameQuery.sortOrder}
                                  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
                </Flex>
            </Box>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>
    </Grid>
}

export default App