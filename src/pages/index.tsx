import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import DesignSystem from "@/ui/design-system/design-system";

export default function Home() {
  return (
    <>
      <Seo title="Mon  Blog" description="mon blog..."></Seo>
      <Layout>
        <DesignSystem />
      </Layout>
    </>
  );
}
