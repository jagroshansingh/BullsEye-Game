import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";
import { Leader } from "./Leader";
import axios from "axios";

export const LeaderBoard = (score:any) => {
  // const [score, setscore] = React.useState(["one", "two", "three"]);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://coral-coral-wig.cyclic.app/record/leaderboard")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [data,score]);
  return (
    <div className="leaderMain">
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
            Leader-Board
          </Heading>
          {data?.map((each: any, i: any) => (
            <Leader key={i} props={each} count={i + 1} />
          ))}
        </VStack>
      </Box>
    </div>
  );
};
