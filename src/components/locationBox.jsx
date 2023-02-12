import theme from "../theme"
import branches from "../branches"
import BranchBox from "./branchBox"

import { useState, useEffect } from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"

import {
  Image,
  Box,
  Center,
  Flex,
  Stack,
  VStack,
  HStack,
  Grid,
  GridItem,
  Divider,
  Text,
  useEditable,
} from "@chakra-ui/react"

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  PhoneIcon,
  CalendarIcon,
  ChatIcon,
} from "@chakra-ui/icons"

function getBranch(branchId) {
  return branches.filter((element) => element.id === branchId)[0]
}

function LocationBox({ viewSize, location, branchIds }) {
  return (
    <>
      <Flex w="100%" padding={"20px 0 0 10px"}>
        <Box
          borderBottom={`solid 2px ${theme.red}`}
          color={theme.black}
          fontSize={18}
          fontWeight={600}
          padding={"0 50px 5px 5px"}
          margin={"20px 0 20px 0"}
        >
          {location}
        </Box>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        w="100%"
        // width={{ base: "100%", lg: "992px" }}
        padding={2}
      >
        {branchIds.map((branchId, index) => (
          <GridItem key={index}>
            <BranchBox
              viewSize={viewSize}
              branchId={branchId}
              branchColor={index % 2 ? theme.blue : theme.red}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default LocationBox
