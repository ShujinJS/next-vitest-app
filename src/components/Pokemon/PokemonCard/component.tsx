import { IPokemonCard } from "@/lib/data/data.pokemons";
import dynamic from "next/dynamic";
import PokemonCardSkeleton from "./skeleton";
import "./style.scss";

interface PokemonCardProps {
  data: IPokemonCard;
  isLoaded: boolean;
  key: number;
}
const Image = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function PokemonCard(props: PokemonCardProps) {
  const classNamePrefix = "pokemon-card";
  const { isLoaded, key, data } = props;
  const { id, name, order, sprites, types } = data;

  return (
    <>
      {isLoaded ? (
        <div className={classNamePrefix}>
          <span className="min-h-10 md:text-lg lg:text-xl">{name}</span>
          <Image
            className="rounded=full"
            src={sprites?.front_default}
            alt="profile image"
            width={70}
            height={40}
            priority={key < 5}
          />
          <p className="min-h-10 md:text-lg lg:text-xl">{name}</p>
          {/* <span className="min-h-5 md:text-lg lg:text-xl">{rating}</span> */}
        </div>
      ) : (
        <PokemonCardSkeleton />
      )}
    </>
  );
}
