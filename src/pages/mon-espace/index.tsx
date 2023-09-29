import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { UserAccountContainer } from "@/ui/modules/user-profil/user-account/user-account-container.tsx";

export default function Home() {
  return (
    <>
      <Seo title="Mon  Blog" description="mon blog..."></Seo>
      <Layout wihSidebar>
        <UserAccountContainer />
      </Layout>
    </>
  );
}
