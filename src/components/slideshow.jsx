import { Box } from "@chakra-ui/react"

import { Slide } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"

import slide0m from "../assets/slide0m.png"
import slide0t from "../assets/slide0t.png"
import slide0p from "../assets/slide0p.png"
import slide1m from "../assets/slide1m.png"
import slide1t from "../assets/slide1t.png"
import slide1p from "../assets/slide1p.png"
import slide2m from "../assets/slide2m.png"
import slide2t from "../assets/slide2t.png"
import slide2p from "../assets/slide2p.png"

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
}
const slideImages = [
  {
    srcM: slide0m,
    srcT: slide0t,
    srcP: slide0p,
    caption: "Slide 0",
  },
  {
    srcM: slide1m,
    srcT: slide1t,
    srcP: slide1p,
    caption: "Slide 1",
  },
  {
    srcM: slide2m,
    srcT: slide2t,
    srcP: slide2p,
    caption: "Slide 2",
  },
]
const buttonStyle = {
  width: "20px",
  background: "none",
  border: "0px",
}
const properties = {
  duration: 4000,
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <defs>
          <clipPath>
            <path fill="#00f" fillOpacity=".514" d="m-7 1024.36h34v34h-34z" />
          </clipPath>
          <clipPath>
            <path
              fill="#aade87"
              fillOpacity=".472"
              d="m-6 1028.36h32v32h-32z"
            />
          </clipPath>
        </defs>
        <path
          d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
          fill="#4d4d4d"
          transform="matrix(-.03541-.00013-.00013.03541 19.02 3.02)"
        />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
        <defs>
          <clipPath>
            <path fill="#00f" fillOpacity=".514" d="m-7 1024.36h34v34h-34z" />
          </clipPath>
          <clipPath>
            <path
              fill="#aade87"
              fillOpacity=".472"
              d="m-6 1028.36h32v32h-32z"
            />
          </clipPath>
        </defs>
        <path
          d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
          transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
          fill="#4d4d4d"
        />
      </svg>
    </button>
  ),
}

function Slideshow({ viewSize }) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // width: viewSize.width < 992 ? viewSize.width : "1440px",
    // width: "auto",
    // height: "350px",
    // height: viewSize.width < 992 ? `${viewSize.width / 2}px` : "496px",
  }

  return (
    <Slide {...properties}>
      {slideImages.map((slideImage, index) => (
        <Box key={index}>
          <Box
            style={{
              ...divStyle,
            }}
            backgroundImage={{
              base: `url(${process.env.PUBLIC_URL}/assets/slide${index}m.png)`,
              md: `url(${process.env.PUBLIC_URL}/assets/slide${index}t.png)`,
              lg: `url(${process.env.PUBLIC_URL}/assets/slide${index}p.png)`,
              // base: `url(${slideImage.srcM})`,
              // md: `url(${slideImage.srcT})`,
              // lg: `url(${slideImage.srcP})`,
            }}
            width={"auto"}
            height={{ base: viewSize.width / 2, lg: "520px" }}
          ></Box>
          {/* <span style={spanStyle}>{slideImage.caption}</span> */}
        </Box>
      ))}
    </Slide>
  )
}

export default Slideshow
