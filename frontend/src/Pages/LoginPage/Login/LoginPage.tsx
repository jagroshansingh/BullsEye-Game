import {
  Flex,
  Box,
  Text,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { json } from "stream/consumers";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({ HandelChangeLogin }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverLoading, SetServerLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const [data, setdata] = useState({
    password: "",
    user_name: "",
  });

  const HandelFormChange = (e: any) => {
    let { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "https://coral-coral-wig.cyclic.app/UserAuth/login",
        data
      );
      toast({
        description: res.data.msg,
        status: res.data.status,
        duration: 9000,
        isClosable: true,
      });

      if (res.data.msg === "User login successfully") {
        console.log(res.data);
        localStorage.setItem("gameData", JSON.stringify(res.data));
        navigate("/game");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex
      borderRadius={"5px"}
      flexDirection="column"
      gap={14}
      bg="black"
      p="20px"
      m="6px"
      w={["97%", "50%"]}
    >
      <Stack>
        <Stack textAlign={"center"}>
          <Text
            mb="30px"
            // fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            display="flex"
            bgGradient="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)"
            bgClip="text"
            fontSize="4xl"
            // fontWeight='extrabold'
          >
            Welcome Back!
          </Text>
        </Stack>
        <Box>
          <Stack>
            <HStack></HStack>
            <FormLabel>
              <Text color={"white"}>User Name</Text>
            </FormLabel>
            <Input
              color={"white"}
              name="user_name"
              onChange={(e) => HandelFormChange(e)}
              type="text"
              value={data.user_name}
            />
            <FormLabel>
              <Text color={"white"}>Password</Text>
            </FormLabel>
            <InputGroup>
              <Input
                name="password"
                color={"white"}
                onChange={(e) => HandelFormChange(e)}
                type={showPassword ? "text" : "Password"}
                value={data.password}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Stack spacing={10} pt={2}>
              <Button
                isLoading={serverLoading}
                loadingText="Submitting"
                size="lg"
                bg={"blue.500"}
                // color={"white"}
                onClick={handleSignup}
                // _hover="none"
              >
                <Text>Login</Text>
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Text>Read more</Text>
      </Stack>

      <Flex gap="5">
        <Box alignContent={"center"} display="grid">
          {" "}
          <Text color="gray.500">Create new account</Text>
        </Box>
        <Box>
          <Button onClick={HandelChangeLogin}>
            <Text color={"blue.500"}>SignUp</Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
