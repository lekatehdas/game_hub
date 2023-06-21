import {Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import PlatFormSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    const handleSelectedGenre = (genre: Genre) => {
        setSelectedGenre(genre)
        console.log(selectedGenre)
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
            <NavBar/>
        </GridItem>

        <Show above="lg">
            <GridItem area='aside' paddingX={5}>
                <GenreList onSelectGenre={handleSelectedGenre} selectedGenre={selectedGenre}/>
            </GridItem>
        </Show>


        <GridItem area='main'>
            <PlatFormSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
            <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
    </Grid>
}

export default App
