import theme from "../theme"
import branches from "../branches"
import Slideshow from "../components/slideshow"

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

import { Link } from "react-router-dom"

function Home({ viewSize }) {
  let branch

  // branch = branches.filter((element) => element.id === branchId)

  return (
    <>
      <Box width={{ base: "100%", lg: "992px" }}>
        <VStack width="100%">
          {/* 슬라이드쇼 */}
          <Box width={"100%"} backgroundColor={theme.black}>
            <Slideshow viewSize={viewSize} />
          </Box>

          {/* 지점소개 */}
          <Grid
            templateColumns="1fr 350px 1fr"
            w="100%"
            alignItems={"center"}
            pt={10}
          >
            <GridItem>
              <Divider borderTop="solid 1px black" />
            </GridItem>
            <GridItem>
              <Center fontSize={"22px"}>
                개념상상 / 개념폴리아 지점별 소식
              </Center>
              <Box height={1} />
              <Center fontSize={"13px"} fontWeight={300} pb={5}>
                학원별 시간표 및 공지사항을 확인하실 수 있습니다
              </Center>
            </GridItem>
            <GridItem>
              <Divider borderTop="solid 1px black" />
            </GridItem>
          </Grid>
          <Flex w="100%" padding={"20px 0 0 10px"}>
            <Box
              borderBottom={`solid 2px ${theme.red}`}
              color={theme.black}
              fontSize={18}
              fontWeight={600}
              padding={"0 50px 5px 5px"}
            >
              서울 대치지역
            </Box>
          </Flex>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            w="100%"
            padding={2}
          >
            {branches.map((branch, index) => (
              <GridItem
                key={index}
                width={"100%"}
                padding={4}
                backgroundColor={theme.white}
                borderRadius={"20px 0 0 0"}
                boxShadow={
                  "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }
              >
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  className="zoom"
                >
                  <Flex justifyContent={"space-between"} w="100%" fontSize={14}>
                    <Box
                      borderRadius={20}
                      backgroundColor={index % 2 ? theme.blue : theme.red}
                      color={theme.white}
                      padding={"2px 40px 2px 20px"}
                    >
                      {branch.title}
                    </Box>
                    <Box color={"gray"}>
                      <a
                        href={`tel://${branch.phone}`}
                        // isExternal
                        className="link"
                      >
                        <PhoneIcon />
                        {branch.phone}
                      </a>
                    </Box>
                  </Flex>
                  {branch.scheduleTitle !== "" && (
                    <Box
                      fontSize={14}
                      color={index % 2 ? theme.blue : theme.red}
                    >
                      {/* <Link to={`/branch/${branch.scheduleLink}`}> */}
                      <Link to={`/branch/${branch.id}/schedule`}>
                        [ {branch.title} ] {branch.scheduleTitle}
                      </Link>
                    </Box>
                  )}
                  {branch.presentationTitle !== "" && (
                    <Box fontSize={14}>
                      {/* <Link to={`/branch/${branch.presentationLink}`}> */}
                      <Link to={`/branch/${branch.id}/presentation`}>
                        [ {branch.title} ] {branch.presentationTitle}
                      </Link>
                    </Box>
                  )}
                </Flex>
              </GridItem>
            ))}
          </Grid>

          {/* 본사소개 */}
          <Flex w="100%" padding={"20px 0 0 10px"}>
            <Box
              borderBottom={`solid 2px ${theme.black}`}
              color={theme.black}
              fontSize={18}
              fontWeight={600}
            >
              개념TV
            </Box>
          </Flex>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            w="100%"
            padding={2}
          >
            <GridItem>
              <Box className="video">
                <iframe
                  src="https://www.youtube.com/embed/wPCAEVlw7L8?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </GridItem>
            <GridItem>
              <Box className="video">
                <iframe
                  src="https://www.youtube.com/embed/xrmqQUaQ3qw?controls=0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </GridItem>
          </Grid>

          <Box height={10} />
        </VStack>
      </Box>

      <style jsx="true">{`
        .link,
        .link:hover,
        .link:visited,
        .link:active {
          text-decoration: none;
          color: inherit;
        }

        .zoom:hover {
          transform: scale(
            1.01
          ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }

        .video {
          width: 100%;
          height: ${viewSize.width < 992
            ? ((viewSize.width - 2 * 2) / 16) * 9
            : ((992 - 2 * 2 - 16) / 2 / 16) * 9}px;
          // border: 1px solid red;
          overflow: hidden;
          position: relative;
        }
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  )
}

export default Home
