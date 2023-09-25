import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentification/register/regsiter.container";

export default function Register() {
    return (
        <>
            <Seo title="Inscription sur Codeurs UAM" description="Page d'inscription" />       
            <Layout>
                <RegisterContainer />
            </Layout>

        </>
    );
}
