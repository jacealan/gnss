import theme from "../theme"
import branches from "../branches"
// import logo from "../assets/logo.png"
import logoTitle from "../assets/logoTitle.png"

import { Image, Box, Flex, Center } from "@chakra-ui/react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, PhoneIcon } from "@chakra-ui/icons"

import { Link } from "react-router-dom"

function Nav({ viewSize }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      width="100%"
      backgroundColor={theme.white}
      color={theme.black}
      boxShadow={
        "0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }
      position="fixed"
      top={0}
      zIndex={100}
    >
      <Center padding={2}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={{ base: "5px 5px 5px 5px", lg: "5px 20px 5px 20px" }}
          width={{ base: "100%", lg: "992px" }}
        >
          <Link to={`${process.env.PUBLIC_URL}`} className="link">
            <Flex alignItems={"Center"} fontWeight={1000}>
              {/* <Image src={logo} height={30} />
            &nbsp;개념폴리아 | 개념상상 */}
              {/* <Image src={logoTitle} height={8} /> */}
              <Image
                src={`${process.env.PUBLIC_URL}/assets/logoTitle.png`}
                height={8}
              />
            </Flex>
          </Link>
          <Flex alignItems={"Center"}>
            <Menu
            //  isOpen={isOpen}
            >
              <MenuButton
                as={Button}
                variant="outline"
                colorScheme="grey"
                rightIcon={<ChevronDownIcon />}
                // rightIcon={<HamburgerIcon />}
                // onMouseEnter={onOpen}
                fontSize={12}
                padding={3}
              >
                지점안내
              </MenuButton>
              <Portal>
                <MenuList
                  zIndex={10}
                  //  onMouseLeave={onClose}
                >
                  {branches.map((branch, index) => (
                    <MenuItem key={index}>
                      {/* <a href={branch.blog} target="_blank"> */}
                      {/* <Link to={`./#${branch.id}`}>{branch.title}</Link> */}
                      <Link to={`${process.env.PUBLIC_URL}/#${branch.id}`}>
                        {branch.title}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Portal>
            </Menu>
          </Flex>
        </Flex>
      </Center>

      <style jsx="true">{`
        .link,
        .link:hover,
        .link:visited,
        .link:active {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </Box>
  )
}

export default Nav
