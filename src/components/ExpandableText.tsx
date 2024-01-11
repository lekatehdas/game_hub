import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const limit = 300;

	if (!children) return null;

	if (children.length <= limit) {
		return <Text>{children}</Text>;
	}

	const summary = children.substring(0, limit);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Text>
			{isExpanded ? children : `${summary}... `}
			<Button
				onClick={() => handleClick()}
				size={"xs"}
				fontWeight={"bold"}
				colorScheme={"yellow"}
				ml={5}
			>
				{isExpanded ? "Collapse" : "Expand"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
