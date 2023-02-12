import theme from "../theme"
import sideBanner1 from "../assets/side_banner_1.png"
import sideBanner2 from "../assets/side_banner_2.png"

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

function Banner({ viewSize }) {
  return (
    <>
      <Box
        display={{ base: "none", lg: "block" }}
        position="fixed"
        right={0}
        top={150}
        w={100}
        border={"solid 1px grey"}
        // backgroundColor={theme.grey}
        color={theme.white}
      >
        <Flex
          w="100%"
          h="100%"
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Box
            w={90}
            h={90}
            margin={2}
            backgroundImage={sideBanner1}
            backgroundSize={"contain"}
          />
          <Box
            w={90}
            h={90}
            margin={2}
            backgroundImage={sideBanner2}
            backgroundSize={"contain"}
          />
        </Flex>
      </Box>
    </>
  )
}

export default Banner
