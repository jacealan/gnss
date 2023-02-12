import Nav from "../components/nav"
import Footer from "../components/footer"
import Banner from "../components/banner"

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
  Text,
} from "@chakra-ui/react"

function Layout({ viewSize }) {
  return (
    <>
      <Nav viewSize={viewSize} />
      {/* <Box width="100%"> */}
      {/* <Center marginTop={20}> */}
      <Outlet />
      {/* </Center> */}
      {/* </Box> */}
      <Footer viewSize={viewSize} />
      {/* <Banner /> */}
    </>
  )
}

export default Layout
