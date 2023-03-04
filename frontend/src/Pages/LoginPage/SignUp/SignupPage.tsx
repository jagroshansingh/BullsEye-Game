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
  Image,
  Center,
} from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";
import { LoginPage } from "../Login/LoginPage";

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [LoginPageStatus, setLoginPageStatus] = useState(false);
  const [serverLoading, SetServerLoading] = useState(false);
  const toast = useToast();
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
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
        "https://coral-coral-wig.cyclic.app/UserAuth/register",
        data
      );
      toast({
        description: res.data.msg,
        status: res.data.status,
        duration: 9000,
        isClosable: true,
      });
      if (res.data.msg === "User already exists") {
        return;
      } else {
        setLoginPageStatus(!LoginPageStatus);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const HandelChangeLogin = () => {
    setLoginPageStatus(!LoginPageStatus);
  };
  return (
    <Box
      border="1px solid black"
      h="100%"
      pb="10rem"
      backgroundSize={"cover"}
      backgroundImage={
        "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    >
      <Flex className="sign-up-page" justify={"center"} mt="5rem">
        <Stack
          spacing={4}
          w={["85%", "85%", "85%", "70%"]}
          m="auto"
          boxShadow={"lg"}
          mt="1rem"
          mb="3rem"
        >
          <Flex
            display={["grid", "flex", "flex", "flex"]}
            borderRadius={"5px"}
            background="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)"
          >
            {LoginPageStatus ? (
              <LoginPage HandelChangeLogin={HandelChangeLogin} />
            ) : (
              <Flex
                borderRadius={"5px"}
                flexDirection="column"
                gap={5}
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
                      Create new account.
                    </Text>
                  </Stack>
                  <Box>
                    <Stack>
                      <HStack>
                        <Box>
                          <FormLabel>
                            <Text color={"white"}>First Name</Text>
                          </FormLabel>
                          <Input
                          color={'white'}
                            name="first_name"
                            onChange={(e) => HandelFormChange(e)}
                            type="text"
                            value={data.first_name}
                          />
                        </Box>
                        <Box>
                          <FormLabel>
                            <Text color={"white"}>Last Name</Text>
                          </FormLabel>
                          <Input
                          color={'white'}
                            name="last_name"
                            onChange={(e) => HandelFormChange(e)}
                            type="text"
                            value={data.last_name}
                          />
                        </Box>
                      </HStack>
                      <FormLabel>
                        <Text color={"white"}>User Name</Text>
                      </FormLabel>
                      <Input
                        name="user_name"
                        color={'white'}
                        onChange={(e) => HandelFormChange(e)}
                        type="text"
                        value={data.user_name}
                      />
                      {/* <FormLabel>
                                            <Text>Email address</Text>
                                        </FormLabel> */}
                      {/* <Input
                                            name="email"
                                            onChange={(e) => HandelFormChange(e)}
                                            type="Email"
                                            value={data.email}
                                        /> */}
                      <FormLabel>
                        <Text color={"white"}>Password</Text>
                      </FormLabel>
                      <InputGroup>
                        <Input
                          name="password"
                          color={'white'}
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
                          <Text>Sign up</Text>
                        </Button>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>

                <Flex gap="5">
                  <Box alignContent={"center"} display="grid">
                    {" "}
                    <Text color="gray.500">Already a User ? </Text>
                  </Box>
                  <Box>
                    <Button>
                      <Text color={"blue.500"} onClick={HandelChangeLogin}>
                        Login
                      </Text>
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            )}
            <Box
              w={["100%", "50%"]}
              m="auto"
              mr="6px"
              display={["none", "grid"]}
            >
              <Center>
                {" "}
                <Image
                  h="119%"
                  borderRadius={"5px"}
                  src="https://i.gifer.com/7kfO.gif"
                />
              </Center>
            </Box>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
