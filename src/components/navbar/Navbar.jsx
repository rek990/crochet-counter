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

// import { AuthContext } from "../authentication/AuthContext";
// import axiosInstance from "../crud/Api";

const Links = ["Home", "Projects"];
