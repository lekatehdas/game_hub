import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="60px"/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};

export default NavBar;
