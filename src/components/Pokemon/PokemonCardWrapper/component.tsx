"use client";
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/component";
import PokemonClosedCard from "../PokemonClosedCard/component";
import { getPokemon, IPokemon, IPokemonCard } from "@/lib/data/data.pokemons";
import { get } from "http";

interface IPokemonCardWrapperProps {
  data: IPokemon;
  isLoaded: boolean;
}

export default function PokemonCardWrapper(props: IPokemonCardWrapperProps) {
  const classNamePrefix = "pokemon-card-wrapper";
  const { isLoaded, data } = props;
  const [isClicked, setIsClicked] = useState(false);

  const renderPokemonCard = async () => {
    const response = await getPokemon(data.name);
    console.log("response", response);
    return response;
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={classNamePrefix} onClick={handleClick}>
      {isClicked ? (
        // <PokemonCard data={renderPokemonCard()} />
        <></>
      ) : (
        <PokemonClosedCard data={data} isLoaded={isLoaded} />
      )}
    </div>
  );
}
