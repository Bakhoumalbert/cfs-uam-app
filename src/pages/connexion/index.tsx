import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Connexion() {
  return (
    <>
      <Seo title="Mon  Blog" description="mon blog..."></Seo>
      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
}
