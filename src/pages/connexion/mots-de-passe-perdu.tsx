import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";

export default function MotsDePassePerdu() {
    return (
        <>
            <Seo title="Inscription sur Codeurs UAM" description="Page d'inscription" />       
            <Layout>
                <ForgetPasswordContainer />
            </Layout>

        </>
    );
}
