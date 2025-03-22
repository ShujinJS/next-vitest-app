"use client";
import { useState } from "react";
import Search from "@/components/Search/component";
import FeedCard from "../FeedCard/component";
import { feedData } from "@/lib/data/data.feed";
import "./style.scss";

export default function FeedTemplate() {
  const classNamePrefix = "feed-template";
  const data = feedData?.feeds;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={classNamePrefix}>
      <Search placeholder="Search Users" />
      <button onClick={() => setIsLoaded(!isLoaded)}>Toggle Skeleton</button>
      {data?.map((feed, index) => (
        <FeedCard key={index} data={feed} isLoaded={isLoaded} />
      ))}
    </div>
  );
}
