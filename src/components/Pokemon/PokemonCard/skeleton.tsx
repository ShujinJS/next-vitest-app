import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PokemonCardSkeleton() {
  const classNamePrefix = "pokemon-card";

  return (
    <div className={classNamePrefix}>
      <Skeleton containerClassName="name-skeleton" />
      <Skeleton containerClassName="img-skeleton" />
      <Skeleton containerClassName="desc-skeleton" />
      <Skeleton containerClassName="rating-skeleton" />
    </div>
  );
}
