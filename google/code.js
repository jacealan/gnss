function myFunction() {
  
}

function getBranchList () {
  ```
  관별 id, url, update여부 확인 후,
  관련 worksheet 업데이트트
  ```

  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("Branches")
  const branches = ws.getRange(7, 1, 3, 4).getValues()
  branches.forEach((branch) => {
    if (branch[0] === "" || branch[1] === false) return

    console.log(branch)
    const isGet = branch[1]
    const id = branch[2]
    const url = branch[3]
    getBranchData(id, url)
  })
}

function getBranchData (id, url) {
  ```
  업데이트된 데이터 가져오기

  parameters:
  - id: id
  - url: google sheet url
  ```

  // const sourceUrl = 'https://docs.google.com/spreadsheets/d/1GiTZdAeG3ACZYGURl41sDw1OZ_KrItXqQ4dKcwsbvu4/edit#gid=0'
  const sourceUrl = url
  const sourceSS = SpreadsheetApp.openByUrl(sourceUrl)
  // const sourceWS = sourceSS.getSheetByName('PlSc')
  const sourceWS = sourceSS.getSheetByName(id)
  const sourceRange = sourceWS.getRange("A:C")
  const sourceData = sourceWS.getRange(1, 1, sourceWS.getLastRow(), 3).getValues()

  const destSS = SpreadsheetApp.getActiveSpreadsheet ()
  let destWS = destSS.getSheetByName(id)
  try {
    destWS.clear()
  }
  catch(err) {
    console.log(id, err)
    destSS.insertSheet(id)
    destWS = destSS.getSheetByName(id)
    destWS.setColumnWidth(1, 200)
    destWS.setColumnWidth(2, 30)
    destWS.setColumnWidth(3, 700)
    destWS.setColumnWidth(4, 180)
  }
  const destRange = destWS.getRange(destWS.getLastRow()+1, 1)

  sourceData.forEach((row) => {
    destWS.appendRow([...row, new Date()])
  })

  destWS.getRange(1, 2, 100, 1).setHorizontalAlignment("center")
}

function cnpInSheet() {
  // sourceRange.copyTo(destRange, {contentsOnly: true});

  // var ss = SpreadsheetApp.getActiveSpreadsheet ();
  // var source = ss.getRange ("source!A:C");
  // var destSheet = ss.getSheetByName("dest");
  // Déterminer l'emplacement de la première ligne vide.
  // var destRange = destSheet.getRange(destSheet.getLastRow()+1,1);
  // source.copyTo (destRange, {contentsOnly: true});
  // source.clear ();
}