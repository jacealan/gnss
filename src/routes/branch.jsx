import { Routes, Route, useParams } from "react-router-dom"

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
  Link,
} from "@chakra-ui/react"

function Branch() {
  const { branchId } = useParams()

  return (
    <>
      <Box>Branch</Box>
      <Box>{branchId}</Box>
    </>
  )
}

export default Branch
