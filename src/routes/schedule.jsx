import theme from "../theme"
import branches from "../branches"
import * as branchImages from "../branchImages"

import { useEffect } from "react"
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
  Divider,
} from "@chakra-ui/react"
import { EditIcon, ExternalLinkIcon } from "@chakra-ui/icons"

function Schedule({ viewSize }) {
  const { branchId, yearId } = useParams()
  const branch = branches.filter((element) => element.id === branchId)[0]

  const space = 50

  return (
    <>
      <Center margin={"80px 0 20px 0 "}>
        <VStack width={{ base: "100%", lg: "992px" }}>
          {/* Title */}
          <Box
            w="100%"
            bgColor={theme.green}
            color={theme.white}
            padding={{ base: 0, lg: `0 ${space}px` }}
          >
            <Box
              w="100%"
              h={{ base: 0, md: `${space}px` }}
              bgColor={theme.green}
            />
            <Flex
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent={"space-between"}
              alignItems={"flex-end"}
              padding={{
                // base: `${space}px ${space / 4}px ${space / 2}px ${space / 4}px`,
                base: `${space}px ${space / 2}px ${space / 2}px ${space / 2}px`,
                md: `${space}px ${space}px ${space / 2}px ${space}px`,
              }}
              // h={`${space * 4}px`}
            >
              <Flex
                flexDirection={"Column"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                w="100%"
                h="100%"
              >
                <Box fontSize={{ base: 15, md: 20 }} fontWeight={600}>
                  {branch.brand} 학원 수업안내
                </Box>
                <Box fontSize={{ base: 25, md: 40 }} fontWeight={700}>
                  {branch.location} {branch[`year${yearId}`]}관
                </Box>
                <Box fontSize={{ base: 15, md: 20 }} fontWeight={300}>
                  {branch.concept}
                </Box>
              </Flex>
              <Flex
                w="100%"
                h="100%"
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
              >
                <Box
                  // h="95px"
                  fontSize={{ base: 60, md: 70 }}
                  fontWeight={700}
                  // textAlign={"right"}
                >
                  {branch[`scheduleMonth${yearId}`]}
                </Box>
                <Box fontSize={{ base: 15, md: 20 }} fontWeight={300}>
                  [ {branch[`scheduleOpen${yearId}`]} ]
                </Box>
              </Flex>
            </Flex>
            <Box w="100%" h={`${space}px`} bgColor="white" />
          </Box>

          {/* Schedule */}
          <Grid
            templateColumns={{ base: "1fr 250px 1fr", sm: "1fr 350px 1fr" }}
            w="100%"
            padding={{
              base: 0,
              // sm: `0 ${space / 2}px`,
              md: `0 ${space}px`,
              lg: `0 ${space * 2}px`,
            }}
            alignItems={"center"}
          >
            <GridItem>
              <Divider borderTop="solid 1px black" />
            </GridItem>
            <GridItem>
              <Center fontSize="24px" fontWeight={600}>
                {branch.brand} {branch.location}관 수업
              </Center>
            </GridItem>
            <GridItem>
              <Divider borderTop="solid 1px black" />
            </GridItem>
          </Grid>
          <Flex justifyContent={"space-between"} alignItems={"center"}></Flex>

          {branch[`scheduleYears${yearId}`].map((title, index) => (
            <Box
              key={index}
              w="100%"
              padding={{
                base: `20px ${space / 2}px 20px ${space / 2}px`,
                md: `20px ${space}px 20px ${space}px`,
                lg: `20px ${space * 2}px 20px ${space * 2}px`,
              }}
            >
              {title && (
                <Box pb={2} fontSize={20} fontWeight={500}>
                  &#x25A0; {title}
                </Box>
              )}
              <Image
                // src={`url(${branchImages[`schedule${branch.id}${index}`]})`}
                src={`${process.env.PUBLIC_URL}/assets/schedules/schedule${
                  branch.id + yearId + index
                }.png`}
                w="100%"
                onError={(element) => {
                  element.target.remove
                    ? element.target.remove()
                    : element.target.removeNode()
                }}
              />
            </Box>
          ))}

          {/* Blog */}
          <a href={branch.blog} target="_blank" rel="noreferrer">
            <Box
              margin="50px 0 10px 0"
              padding={"5px 40px"}
              borderRadius={20}
              border={`solid 2px ${theme.green}`}
            >
              <Flex alignItems={"center"}>
                <Box>
                  {branch.brand} {branch.location}관 방문하기&nbsp;
                </Box>
                <ExternalLinkIcon />
              </Flex>
            </Box>
          </a>

          {/* Phone */}
          <Box
            w="100%"
            padding={{
              base: `${space}px ${space / 2}px 20px ${space / 2}px`,
              md: `${space}px ${space}px 20px ${space}px`,
              lg: `${space}px ${space * 2}px 20px ${space * 2}px`,
            }}
            bgColor={theme.green}
            color={theme.white}
            fontSize={20}
            fontWeight={700}
          >
            <a href={`tel://${branch.phone}`}>
              {branch.brand} {branch.location}관{" "}
              {branch[`phone${yearId}`].replaceAll("-", ". ")}
            </a>
          </Box>
        </VStack>
      </Center>
    </>
  )
}

export default Schedule
