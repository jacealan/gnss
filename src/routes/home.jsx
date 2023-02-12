import theme from "../theme"
import locations from "../locations"
import branches from "../branches"
import Slideshow from "../components/slideshow"
import LocationBox from "../components/locationBox"
import BranchBox from "../components/branchBox"

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

function getBranch(branchId) {
  return branches.filter((element) => element.id === branchId)[0]
}

function Home({ viewSize }) {
  return (
    <>
      {/* 슬라이드쇼 */}
      <Center>
        <Box
          margin={"67px 0 10px 0"}
          width={viewSize.width < 1920 ? viewSize.width : "1920px"}
          // width={{ base: "100%", lg: "1440px" }}
          // w="100%"
          backgroundColor={theme.black}
        >
          <Slideshow viewSize={viewSize} />
        </Box>
      </Center>
      <Center>
        <VStack width={{ base: "100%", lg: "992px" }}>
          <Box w="100%">
            <VStack>
              {/* 지점소개 */}
              <Grid
                templateColumns="1fr 350px 1fr"
                w="100%"
                // width={{ base: "100%", lg: "992px" }}
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

              {locations.map((element, index) => (
                <LocationBox
                  key={index}
                  viewSize={viewSize}
                  location={element.location}
                  branchIds={element.branchIds}
                />
              ))}
              {/* <LocationBox
                viewSize={viewSize}
                location="서울 대치지역"
                branchIds={["SsDc", "PlDc", "SsGmp"]}
              />

              <LocationBox
                viewSize={viewSize}
                location="서울 서초지역"
                branchIds={["SsSc", "PlSc"]}
              />

              <LocationBox
                viewSize={viewSize}
                location="서울 잠실지역"
                branchIds={["SsJs", "PlJs"]}
              /> */}

              {/* TV */}
              <Grid
                templateColumns="1fr 150px 1fr"
                w="100%"
                // width={{ base: "100%", lg: "992px" }}
                alignItems={"center"}
                pt={10}
              >
                <GridItem>
                  <Divider borderTop="solid 1px black" />
                </GridItem>
                <GridItem>
                  <Center fontSize={"22px"}>상상TV</Center>
                </GridItem>
                <GridItem>
                  <Divider borderTop="solid 1px black" />
                </GridItem>
              </Grid>
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
        </VStack>
      </Center>

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
            ? viewSize.width < 768
              ? ((viewSize.width - 2 * 2) / 16) * 9
              : ((viewSize.width - 2 * 2 - 16) / 2 / 16) * 9
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
