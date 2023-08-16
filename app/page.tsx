import Header from './components/home/Header'
import Clients from './components/common/Clients'
import Services from './components/home/Services'
import HomeIntroduction from './components/home/HomeIntroduction'
import Collaboration from './components/home/Collaboration'
import Portfolio from './components/common/Portfolio'

export default function Home() {
  return (
    <>
          <Header></Header>
          <Clients></Clients>
          <HomeIntroduction></HomeIntroduction>
          <Services></Services>
          <Collaboration></Collaboration>
          <Portfolio></Portfolio>
    </>
  )
}
