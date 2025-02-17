import { IPlaceCard } from "@/lib/data/data.places";
import dynamic from "next/dynamic";
import PlaceCardSkeleton from "./skeleton";
import "./style.scss";

interface PlaceCardProps {
  data: IPlaceCard;
  isLoaded: boolean;
  key: number;
}
const Image = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function PlaceCard(props: PlaceCardProps) {
  const classNamePrefix = "place-card";
  const { isLoaded, data, key } = props;
  const { name, location, description, image, rating } = data;

  return (
    <>
      {isLoaded ? (
        <div className={classNamePrefix}>
          <span className="min-h-10 md:text-lg lg:text-xl">{name}</span>
          <Image
            className="rounded=full"
            src={`/${image}.png`}
            alt="profile image"
            width={70}
            height={40}
            priority={key < 5}
          />
          <p className="min-h-10 md:text-lg lg:text-xl">{description}</p>
          <span className="min-h-5 md:text-lg lg:text-xl">{rating}</span>
        </div>
      ) : (
        <PlaceCardSkeleton />
      )}
    </>
  );
}
