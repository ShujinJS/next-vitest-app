"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { getPokemons, IPokemons } from "@/lib/data/data.pokemons";
import leftBrandLogo from "@lib/assets/ps5_logo.jpg";
import rightBrandLogo from "@lib/assets/doritos_logo.jpg";
import Spinner from "@/components/Spinner/component";
import "./style.scss";

const PokemonCardWrapper = dynamic(
  () => import("../PokemonCardWrapper/component"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);
const Image = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => <Spinner />,
});

export default function PokemonTemplate() {
  const classNamePrefix = "places-template";
  const [data, setData] = useState<IPokemons>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemons();
      setData(response);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isSpinning) {
    return (
      <div className="w-screen h-screen absolute left-0 top-0 bg-indigo-600">
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classNamePrefix}>
      <div className={classNamePrefix + "__add-left"}>
        <Image src={leftBrandLogo} width={400} height={400} alt="add logo" />
      </div>

      <div className={classNamePrefix + "__mid-container"}>
        <div className={classNamePrefix + "__mid-container" + "__add-center"}>
          {/* <Image src={midBrandLogo} width={400} height={400} alt="add logo" /> */}
          <picture>
            <source srcSet={"/image-320w.png"} media="(max-width: 320px)" />
            <source srcSet={"/image-480w.png"} media="(max-width: 480px)" />
            <source srcSet={"/image-800w.png"} media="(max-width: 800px)" />
            <img src="/lego_logo.png" alt="picture" />
          </picture>
        </div>
        <button onClick={() => setIsLoaded(!isLoaded)}>Toggle Skeleton</button>

        {/* <div className={classNamePrefix + "__cards-container"}>
          {data?.results.map((pokemon) => (
            <PokemonClosedCard data={pokemon} isLoaded={isLoaded} />
          ))}
        </div> */}

        <div className={classNamePrefix + "__cards-container"}>
          {data?.results.map((pokemon) => (
            <PokemonCardWrapper data={pokemon} isLoaded={isLoaded} />
          ))}
        </div>

        <div className={classNamePrefix + "__mid-container" + "__add-bottom"}>
          <Image
            src={"/bottom_add_logo.jpg"}
            width={400}
            height={400}
            alt="add logo"
          />
        </div>
      </div>

      <div className={classNamePrefix + "__add-right"}>
        <Image src={rightBrandLogo} width={400} height={400} alt="add logo" />
      </div>
    </div>
  );
}
