import React from "react"
import Header from "./components/Header"
import Swap from "./components/Swap"
import Pool from "./components/Pool"
import Vote from "./components/Vote"

export default function App() {
  const [chosenPage, setChosenPage] = React.useState("swap")

  function handleChangePage(newPage) {
    setChosenPage(newPage)
  }
  return (
    <div id="app">
      <Header chosenPage={chosenPage} setChosenPage={handleChangePage} />

      {chosenPage == "swap" && <Swap />}
      {chosenPage == "pool" && <Pool />}
      {chosenPage == "vote" && <Vote />}
    </div>
  )
}