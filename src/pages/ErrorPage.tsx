import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<>
			<NavBar />
			<Box p={5}><Heading size={"xl"}>Oops</Heading>
				<Text h={"md"}>
					{isRouteErrorResponse(error)
						? "This page does not exist"
						: "An unexpected error has happen"}
				</Text></Box>
		</>
	);
};

export default ErrorPage;
