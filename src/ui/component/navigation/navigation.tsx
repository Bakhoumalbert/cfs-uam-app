import Link from "next/link"
import { Container } from "../container/container"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/context/AuthUserContext"

export const Navigation = () => {
  const { authUser, authUserIsLoading } = useAuth();
  console.log("authUser : ", authUser);
  console.log("authUserIsLoading : ", authUserIsLoading);
  
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-2">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            logo
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <ActiveLink href="/">Projets</ActiveLink>
          <ActiveLink href="/">Formations</ActiveLink>
          <ActiveLink href="/">Contacts</ActiveLink>
          <ActiveLink href="/connexion">Connexion</ActiveLink>
          <ActiveLink href="/connexion/inscription">Rejoindre</ActiveLink>
        </div>
      </Container>
    </div>
  )
}
