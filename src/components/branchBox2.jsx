import theme from "../theme"
import branches from "../branches"

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
} from "@chakra-ui/react"

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  PhoneIcon,
} from "@chakra-ui/icons"

function getBranch(branchId) {
  return branches.filter((element) => element.id === branchId)[0]
}

function BranchBox2({ viewSize, location, branchIds }) {
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
        {branchIds.map((branchId, index) => {
          const branch = getBranch(branchId)
          return (
            <GridItem key={index}>
              <Flex justifyContent={"space-between"} alignItems={"baseline"}>
                <Flex
                  borderRadius={"10px 10px 0 0"}
                  width={"250px"}
                  alignItems={"baseline"}
                  bgColor={index % 2 ? theme.blue : theme.red}
                  color={theme.white}
                  padding={2}
                >
                  <Box>&nbsp;{branch.title}</Box>
                  <Box fontSize={"13px"}>&nbsp;( {branch.year} )</Box>
                </Flex>
                <Flex justifyContent={"flex-end"} alignItems={"baseline"}>
                  <Box fontSize={13}>
                    <a href={`tel://${branch.phone0}`}>
                      <PhoneIcon color="gray" />
                      {branch.year0}
                    </a>
                  </Box>
                  <Box>•</Box>
                  <Box fontSize={13}>
                    <a href={`tel://${branch.phone1}`}>
                      <PhoneIcon color="gray" />
                      {branch.year1}
                    </a>
                  </Box>
                </Flex>
              </Flex>
              <Box
                padding={"10px 20px 20px 20px"}
                backgroundColor={theme.white}
                borderRadius={"0 10px 0 0"}
                boxShadow={
                  "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }
              >
                {branch.scheduleTitle0 && (
                  <>
                    <Box pt={2} pb={2}>
                      <Link to={`/branch/${branch.id}/schedule/0`}>
                        {branch.scheduleTitle0}
                      </Link>
                    </Box>

                    <Divider borderTop="dashed 1px black" w="250px" />
                  </>
                )}
                {branch.scheduleTitle1 && (
                  <>
                    <Box pt={2} pb={2}>
                      <Link to={`/branch/${branch.id}/schedule/1`}>
                        {branch.scheduleTitle1}
                      </Link>
                    </Box>

                    <Divider borderTop="dashed 1px black" w="250px" />
                  </>
                )}
                {branch.presentationTitle0 && (
                  <>
                    <Box pt={2} pb={2}>
                      <Link to={`/branch/${branch.id}/presentation/0`}>
                        {branch.presentationTitle0}
                      </Link>
                    </Box>
                    <Divider borderTop="dashed 1px black" w="250px" />
                  </>
                )}
                {branch.presentationTitle1 && (
                  <>
                    <Box pt={2} pb={2}>
                      <Link to={`/branch/${branch.id}/presentation/1`}>
                        {branch.presentationTitle1}
                      </Link>
                    </Box>
                    <Divider borderTop="dashed 1px black" w="250px" />
                  </>
                )}
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}

export default BranchBox2
