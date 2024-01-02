import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import useGameQueryStore from "../store.ts";

const PlatFormSelector = () => {
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

	const { data, error } = usePlatforms();
	const selectedPlatform = data?.results.find((p) => p.id === platformId);

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => setPlatformId(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatFormSelector;
