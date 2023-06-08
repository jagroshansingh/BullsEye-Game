import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Leader = (prop: any) => {
  // console.log(prop);
  return (
    <div style={{ border: "0px solid", width: "100%" }}>
      <Button
        colorScheme={"#1d1f20"}
        border={"1px"}
        h={"auto"}
        width={"90%"}
        p={"1"}
      >
        <VStack>
          <Heading size={"sm"}>{prop.props.playername}</Heading>
          <Text>
            {("0" + Math.floor((prop.props.timestamp / 1000) % 60)).slice(-2)}:
            {("0" + ((prop.props.timestamp / 10) % 100)).slice(-2)}
          </Text>
        </VStack>
      </Button>
    </div>
  );
};
