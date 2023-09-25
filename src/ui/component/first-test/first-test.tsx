import { FeatureCard } from "@/pages/components/FeatureCard"
import Image from "next/image"

export const FirstTest = () => {
  return (
    <main>
        <section className="hero">
          <div className="hero-content flex-col md:flex-row">
            {/* <Image
              src="/bat.jpg"
              width={768}
              height={512}
              alt="batiment de l uam"
            /> */}
            <Image
              className="w-full md:w-1/2 p-5"
              src="/Rectorat.jpg"
              width={768}
              height={512}
              alt="rectorat de l'uam"
            />
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold py-3">Objectifs principales</h1>
              <h2 className="text-xl pb-3">
                Rester focus sur les objectifs principales sans sen détourner
              </h2>
              <span className="btn btn-primary">Learn more</span>
            </div>
          </div>
        </section>

        <section className="text-center mt-4">
          <h3 className="text-xl pb-3">Nos épreuves</h3>
          <div className="flex w-full md:justify-around flex-col md:flex-row gap-4">
            <FeatureCard
              className="w-full md:w-1/4"
              title="programmation"
              description="c'est un domaine incontournable de l'informatique"
              image="/bat.jpg"
            />
            <FeatureCard
              className="w-full md:w-1/4"
              title="Datascient"
              description="Il s'agit de la science des données"
              image="/Rectorat.jpg"
            />
            <FeatureCard
              className="w-full md:w-1/4"
              title="Datastructure"
              description="Il s'agit de la structure des données et leur manipulation"
              image="/Rectorat.jpg"
            />
          </div>
        </section>
      </main>
  )
}
