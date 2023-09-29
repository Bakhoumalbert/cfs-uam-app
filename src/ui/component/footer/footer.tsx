import Link from "next/link"
import { Container } from "../container/container"

export const Footer = () => {
  return (
    <div className="flex px-12 h-56">
      <Container className="w-full flex items-center bg-secondary gap-7 text-white">
        Footer
        <Link href="/connexion/mots-de-passe-perdu">mot de passe perdu</Link>
      </Container>
    </div>
  )
}
