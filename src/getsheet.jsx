import { useState, useEffect } from "react"
// import dotenv from "dotenv"
// dotenv.config()

const GetSheet = () => {
  const [cardName, setCardName] = useState({})

  // const sheetId = "1GiTZdAeG3ACZYGURl41sDw1OZ_KrItXqQ4dKcwsbvu4"
  const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`
  const sheetName = "PlSc"
  const query = encodeURIComponent("Select *")
  const url = `${base}&sheet=${sheetName}&tq=${query}`

  useEffect(() => {
    const gsheetData = {}
    fetch(url)
      .then((res) => res.text())
      .then((rep) => JSON.parse(rep.substring(47).slice(0, -2)).table.rows)
      .then((jsonData) => {
        console.log(jsonData)
        jsonData.forEach((row, idx) => {
          // console.log(row)
          // if (row.c[7] !== null) {
          //   gsheetData[row.c[7].v] = { name: row.c[1].v }
          // } else {
          //   gsheetData[toString(idx)] = { name: row.c[1].v }
          // }
        })
        setCardName(gsheetData)
        // console.log(gsheetData)
      })
  }, [])

  return <>getsheet</>
}

export default GetSheet
