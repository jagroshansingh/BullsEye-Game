import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Score } from "./Score";
import "./ScoreBoard.css";

export const ScoreBoard = ({ score }: any) => {
  // const [score, setscore] = React.useState(["one", "two", "three"]);
  return (
    <div className="scoreMain">
      <Box
        borderRadius={"5px"}
        color={"white"}
        h={"70vh"}
        background="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)"
        // marginBottom={'50px'}
        border={"1px solid #1d1f20"}
      >
        <VStack
          borderRadius={"5px"}
          flexDirection="column"
          gap={2}
          bg="#1d1f20"
          paddingY={5}
          paddingX={1}
          m="6px"
          h={"68vh"}
          overflow={"hidden"}
          overflowY={"auto"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Heading size={"md"} className={"Head"}>
            Score-Board
          </Heading>
          {score?.map((each: any, i: any) => (
            <Score key={i} props={each} count={i + 1} />
          ))}
        </VStack>
      </Box>
    </div>
  );
};
