export function setupGrid(rowsClass, showMoreButtonClass) {
  let startRow = 0
  const rows = document.querySelectorAll(rowsClass)
  const rowsLength = rows.length
  const rowsToShow = 4

  for (let i = rowsToShow; i < rowsLength; i++) {
    rows[i].style.display = 'none'
  }

  if (rowsLength > rowsToShow) {
    document.getElementById(showMoreButtonClass).style.display = 'inline-block'
  }

  document
    .getElementById(showMoreButtonClass)
    .addEventListener('click', function () {
      const remainingRows = rowsLength - startRow
      const rowsToDisplay = Math.min(rowsToShow, remainingRows)

      let hiddenRowsCount = 0
      for (let i = startRow; i < rowsLength; i++) {
        if (
          rows[i].style.display === 'none' &&
          hiddenRowsCount < rowsToDisplay
        ) {
          rows[i].style.display = 'flex'
          hiddenRowsCount++
        }
      }

      startRow += hiddenRowsCount

      if (startRow >= rowsLength) {
        document.getElementById(showMoreButtonClass).style.display = 'none'
      } else {
        const remainingRowsAfterDisplay = rowsLength - startRow
        if (remainingRowsAfterDisplay <= rowsToShow) {
          document.getElementById(showMoreButtonClass).style.display = 'none'
        }
      }
    })
}
