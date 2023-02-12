import theme from "../theme"
import branches from "../branches"

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

function BranchBox({ viewSize, branchId, branchColor }) {
  const branch = getBranch(branchId)
  const [contents0, setContents0] = useState(branch.presentationContents0[0])
  const [contents1, setContents1] = useState(branch.presentationContents1[0])
  let count0 = 0
  let count1 = 0
  const flipHeight = 16.5
  const flipSecond = 4

  useEffect(() => {
    setInterval(() => {
      count0 += 5
      // count0 += Math.random() >= 0.5 ? 1 : 0
      count1 += Math.random() >= 0.5 ? 1 : 0

      setContents0(
        branch.presentationContents0[
          count0 % branch.presentationContents0.length
        ]
      )
      setContents1(
        branch.presentationContents1[
          count1 % branch.presentationContents1.length
        ]
      )
    }, 3000)
  }, [])

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"baseline"}>
        <Flex
          borderRadius={"10px 10px 0 0"}
          width={"250px"}
          alignItems={"baseline"}
          bgColor={branchColor}
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
            <Link
              to={`${process.env.PUBLIC_URL}/branch/${branch.id}/schedule/0`}
            >
              <HStack pt={2} pb={2}>
                <CalendarIcon />
                <HStack alignItems={"baseline"}>
                  <Box>{branch.scheduleTitle0}</Box>
                  <Box fontSize={11}>({branch.scheduleOpen0})</Box>
                </HStack>
              </HStack>
            </Link>

            <Divider borderTop="dashed 1px black" w="300px" />
          </>
        )}
        {branch.scheduleTitle1 && (
          <>
            <Link
              to={`${process.env.PUBLIC_URL}/branch/${branch.id}/schedule/1`}
            >
              <HStack pt={2} pb={2}>
                <CalendarIcon />
                <HStack alignItems={"baseline"}>
                  <Box>{branch.scheduleTitle1}</Box>
                  <Box fontSize={11}>({branch.scheduleOpen1})</Box>
                </HStack>
              </HStack>
            </Link>

            <Divider borderTop="dashed 1px black" w="300px" />
          </>
        )}
        {branch.presentationTitle0 && (
          <>
            <Link
              to={`${process.env.PUBLIC_URL}/branch/${branch.id}/presentation/0`}
            >
              <HStack pt={2} pb={2} alignItems={"flex-start"}>
                <ChatIcon mt={1} />
                <Flex
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"baseline"}
                >
                  <Box>{branch.presentationTitle0}</Box>
                  <Box fontSize={11} className="flip">
                    {branch.presentationContents0.length > 1
                      ? branch.presentationContents0.map((content, index) => (
                          <Box
                            key={index}
                            className="flipContent"
                            style={
                              index === 0
                                ? {
                                    animation: `show${
                                      branch.presentationContents0.length
                                    } ${
                                      flipSecond *
                                      branch.presentationContents0.length
                                    }s linear infinite`,
                                  }
                                : null
                            }
                          >
                            {content}
                          </Box>
                        ))
                      : branch.presentationContents0[0]}
                    {/* <Box className="flipContent">
                      {branch.presentationContents0[0]}
                    </Box>
                    <Box className="flipContent">
                      {branch.presentationContents0[1]}
                    </Box>
                    <Box className="flipContent">
                      {branch.presentationContents0[2]}
                    </Box> */}
                  </Box>
                </Flex>
              </HStack>
            </Link>
            <Divider borderTop="dashed 1px black" w="300px" />
          </>
        )}
        {branch.presentationTitle1 && (
          <>
            <Link
              to={`${process.env.PUBLIC_URL}/branch/${branch.id}/presentation/1`}
            >
              <HStack pt={2} pb={2} alignItems={"flex-start"}>
                <ChatIcon mt={1} />
                <Flex
                  flexDirection={"column"}
                  justifyContent={"start"}
                  alignItems={"baseline"}
                >
                  <Box>{branch.presentationTitle1}</Box>
                  <Box fontSize={11} className="flip">
                    {branch.presentationContents1.length > 1
                      ? branch.presentationContents1.map((content, index) => (
                          <Box
                            key={index}
                            className="flipContent"
                            style={
                              index === 0
                                ? {
                                    animation: `show${
                                      branch.presentationContents1.length
                                    } ${
                                      flipSecond *
                                      branch.presentationContents1.length
                                    }s linear infinite`,
                                  }
                                : null
                            }
                          >
                            {content}
                          </Box>
                        ))
                      : branch.presentationContents1[0]}
                  </Box>
                </Flex>
              </HStack>
            </Link>
            <Divider borderTop="dashed 1px black" w="300px" />
          </>
        )}
      </Box>

      <style jsx="true">{`
        .flip {
          height: ${flipHeight}px;
          overflow: hidden;
        }

        // .flip div:first-child {
        //   animation: show 12s linear infinite;
        // }

        .flipContent {
          height: ${flipHeight}px;
        }

        @keyframes show2 {
          0% {
            margin-top: -${flipHeight * 2}px;
          }
          5% {
            margin-top: -${flipHeight}px;
          }
          50% {
            margin-top: -${flipHeight}px;
          }
          55% {
            margin-top: 0px;
          }
          99.99% {
            margin-top: 0px;
          }
          100% {
            margin-top: -${flipHeight * 2}px;
          }
        }

        @keyframes show3 {
          0% {
            margin-top: -${flipHeight * 3}px;
          }
          5% {
            margin-top: -${flipHeight * 2}px;
          }
          33% {
            margin-top: -${flipHeight * 2}px;
          }
          38% {
            margin-top: -${flipHeight}px;
          }
          66% {
            margin-top: -${flipHeight}px;
          }
          71% {
            margin-top: 0px;
          }
          99.99% {
            margin-top: 0px;
          }
          100% {
            margin-top: -${flipHeight * 3}px;
          }
        }

        @keyframes show4 {
          0% {
            margin-top: -${flipHeight * 4}px;
          }
          5% {
            margin-top: -${flipHeight * 3}px;
          }
          25% {
            margin-top: -${flipHeight * 3}px;
          }
          30% {
            margin-top: -${flipHeight * 2}px;
          }
          50% {
            margin-top: -${flipHeight * 2}px;
          }
          55% {
            margin-top: -${flipHeight}px;
          }
          75% {
            margin-top: -${flipHeight}px;
          }
          80% {
            margin-top: 0px;
          }
          99.99% {
            margin-top: 0px;
          }
          100% {
            margin-top: -${flipHeight * 4}px;
          }
        }
      `}</style>
    </>
  )
}

export default BranchBox
