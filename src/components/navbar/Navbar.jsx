// Using template from https://chakra-templates.dev/navigation/navbar
import { ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { AuthContext } from "../authentication/AuthContext";
import axiosInstance from "../crud/Api";

const Links = ["Home", "Projects"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      //   TODO: Change background to "#5F9EA0" (green) or "#A0605F" (red) or white
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated, onLogout, userDetails, setUserDetails } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !userDetails) {
      axiosInstance
        .get("http://localhost:8000/users/details/")
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const logout = () => {
    setUserDetails(null);
    onLogout();
  };

  const goToSettings = () => {
    if (isAuthenticated) {
      navigate("/settings");
    }
  };

  return (
    <>
      {/* TODO: Change background to "#5F9EA0" (green) or "#A0605F" (red) or white */}
      <Box
        width="100%"
        position="fixed"
        top="0vh"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight="bold">Row Counter</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex
            alignItems={"center"}
            className="userMenuContainer"
            visibility={!isAuthenticated ? "hidden" : "visible"}
          >
            <Menu className="userMenu">
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={userDetails?.profile_picture} />
                {"  "}
                {userDetails?.name}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={goToSettings}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
