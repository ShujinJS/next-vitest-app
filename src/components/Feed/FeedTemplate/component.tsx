import FeedCard from "../FeedCard/component";
import { feedData } from "@/lib/data/data.feed";
import "./style.scss";

export default function FeedTemplate() {
  const classNamePrefix = "feed-template";
  const data = feedData?.feeds;

  return (
    <div className={classNamePrefix}>
      {data?.map((feed, index) => (
        <FeedCard key={index} data={feed} />
      ))}
    </div>
  );
}
