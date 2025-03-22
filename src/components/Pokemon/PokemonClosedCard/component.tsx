import { IPokemon } from "@/lib/data/data.pokemons";
import dynamic from "next/dynamic";
import "./style.scss";

interface PokemonClosedCardProps {
  data: IPokemon;
  isLoaded: boolean;
}

const Image = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function PokemonClosedCard(props: PokemonClosedCardProps) {
  const classNamePrefix = "pokemon-closed-card";

  return (
    <div className={classNamePrefix}>
      <Image
        className="rounded=full"
        src={"/pokemon_card.png"}
        alt="profile image"
        width={220}
        height={350}
      />
    </div>
  );
}
