import { About } from "../components/About"
import { HowItWork } from "../components/HowItWork"
import { MainBanner } from "../components/MainBanner"
import { Plans } from "../components/Plans"
import { Questions } from "../components/Questions"
import { ClientsResults } from "../components/ClientsResults"

export const App = () => {
  return (
    <>
      <MainBanner />
      <About />
      <Plans />
      <HowItWork />
      <Plans />
      <Questions />
      <ClientsResults />
    </>
  )
}
