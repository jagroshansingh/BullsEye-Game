import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Score } from "./Score";

export const ScoreBoard = ({score}:any) => {
  // const [score, setscore] = React.useState(["one", "two", "three"]);
  return (
    <div style={{ width: "20%" }}>
      <Box
        borderRadius={"5px"}
        color={"white"}
        h={"70vh"}
        background="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)"
      >
        <VStack
          borderRadius={"5px"}
          flexDirection="column"
          gap={2}
          bg="black"
          paddingY={5}
          paddingX={1}
          m="6px"
          h={"70vh"}
          overflow={'hidden'}
        >
          <Heading size={"md"}>Score-Board</Heading>
          {score?.map((each:any, i:any) => (
            <Score key={i} props={each} count={i + 1} />
          ))}
        </VStack>
      </Box>
    </div>
  );
};
