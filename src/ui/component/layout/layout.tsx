import { Navigation } from "../navigation/navigation"
import { Footer } from "../footer/footer"
import { Container } from "../container/container"
import { UseAccountNavigation } from "../navigation/use-account-navigation"

interface Props {
    children: React.ReactNode
    wihSidebar?: boolean
}

export const Layout = ({ children, wihSidebar }: Props) => {

  let view: React.ReactNode

  if(wihSidebar){
    view = (
      <Container className="mb-4">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3"><UseAccountNavigation /></div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    )
  }else{
    view = <>{children}</>
  }

  return (
    <>
      <Navigation />
        {view}
      <Footer />
    </>
  )
}
