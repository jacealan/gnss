import theme from "../theme"

import { Center, Box } from "@chakra-ui/react"

function Footer({ viewSize }) {
  return (
    <Center backgroundColor={theme.grey} color={theme.white}>
      <Box width={{ base: "100%", lg: "992px" }} padding={"15px 20px"}>
        <Box fontSize={14} fontWeight={600}>
          원리상상 학원
        </Box>
        <Box fontSize={10} fontWeight={300}>
          개념상상 | 개념폴리아 | 개념상상GMP | 개념상상 과학마스터올 |
          리틀폴리아 | 개념상상,개념폴리아 교육연구소 | 개념상상,개념폴리아
          입시전략연구소
        </Box>
        <Box fontSize={10} fontWeight={300}>
          대표 : 이재익, 사업자등록번호 : 120-87-37234, 주소 : 서울특별시 강남구
          도곡로 418 강원빌딩 4층, 전화 :{" "}
          <a href="tel://02-594-4808">02-594-4808</a>
        </Box>
        <Box fontSize={10} fontWeight={300}>
          ⓒ 원리상상(주) All Right Reserved
        </Box>
      </Box>
    </Center>
  )
}

export default Footer
