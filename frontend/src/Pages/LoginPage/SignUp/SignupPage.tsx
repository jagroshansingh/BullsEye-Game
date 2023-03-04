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
//   import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const [serverLoading, SetServerLoading] = useState(false);
    const [data, setdata] = useState({
        first_name: "",
        last_name: "",
        email: "",
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

    const handleSignup = async () => { };

    return (
        <>
            <Flex
                className="sign-up-page"
                justify={"center"}
                mt="5rem"
            >
                <Stack
                    spacing={4}
                    w={["85%", "65%", "60%", "30%"]}
                    m="auto"
                    boxShadow={"lg"}
                    mt="1rem"
                    mb="3rem"
                >
                    <Box borderRadius={"5px"} background="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)">
                        <Flex borderRadius={"5px"} flexDirection="column" gap={5} bg="black" p="20px" m="6px">
                            <Stack>
                                <Stack textAlign={"center"}>
                                    <Text
                                        mb="30px"
                                        // fontSize="2xl"
                                        fontFamily="monospace"
                                        fontWeight="bold"
                                        display="flex"
                                        bgGradient="linear-gradient(270deg, #00d7b9, #b95dd7 50%, #ffb367 100%)"

                                        bgClip='text'
                                        fontSize='4xl'
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
                                                    <Text >First Name</Text>
                                                </FormLabel>
                                                <Input
                                                    name="first_name"
                                                    onChange={(e) => HandelFormChange(e)}
                                                    type="text"
                                                    value={data.first_name}
                                                />
                                            </Box>
                                            <Box>
                                                <FormLabel>
                                                    <Text>Last Name</Text>
                                                </FormLabel>
                                                <Input
                                                    name="last_name"
                                                    onChange={(e) => HandelFormChange(e)}
                                                    type="text"
                                                    value={data.last_name}
                                                />
                                            </Box>
                                        </HStack>
                                        <FormLabel>
                                            <Text>User Name</Text>
                                        </FormLabel>
                                        <Input
                                            name="user_name"
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
                                            <Text>Password</Text>
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                name="password"
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
                                        <Text color={"blue.500"}
                                        >Login</Text>
                                    </Button>
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
};
