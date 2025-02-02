"use client";
import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { IFeed } from "@lib/data/data.feed";
import { clsx } from "clsx";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.scss";

interface FeedCardProps {
  data: IFeed;
}

export default function FeedCard(props: FeedCardProps) {
  const classNamePrefix = "feed-card";
  const { op, avatar, images, description, likes, comments, shares } =
    props?.data;
  const [activeImage, setActiveImage] = useState({
    src: images && images[0].src,
  });

  return (
    <div className={classNamePrefix}>
      <div className={clsx(classNamePrefix + "__identity")}>
        {!avatar ? (
          <Image
            className="rounded-full"
            src={`/${avatar}.png`}
            alt="profile image"
            width={35}
            height={35}
          />
        ) : (
          <Skeleton
            circle
            width={35}
            height={35}
            containerClassName="avatar-skeleton"
          />
        )}

        {!op ? <span>{op}</span> : <Skeleton width={70} duration={3} />}
      </div>

      <div className={clsx(classNamePrefix + "__content")}>
        {!description ? (
          <p>{description}</p>
        ) : (
          <Skeleton width={250} height={10} count={1.5} />
        )}

        <div className={clsx(classNamePrefix + "__content" + "__images")}>
          {!activeImage ? (
            <Image
              src={`/${activeImage.src}.png`}
              alt="feed image"
              width={250}
              height={100}
            />
          ) : (
            <Skeleton width={250} height={100} />
          )}
          <div className={clsx(classNamePrefix + "__content" + "__thumbnails")}>
            {!images ? (
              images?.map((image, index) => (
                <Image
                  key={index}
                  src={`/${image.src}.png`}
                  alt="feed image"
                  width={50}
                  height={50}
                  className={clsx(image.src === activeImage.src && "active")}
                  onClick={() => setActiveImage(image)}
                />
              ))
            ) : (
              <Skeleton width={50} height={50} />
            )}
          </div>

          <div className={clsx(classNamePrefix + "__interactions")}>
            {!likes ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            ) : (
              <Skeleton width={5} height={5} />
            )}
            {!comments ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            ) : (
              <Skeleton width={5} height={5} />
            )}
          </div>
          <div className={clsx(classNamePrefix + "__comments")}>
            {comments ? (
              comments?.map((comment, index) => (
                <div
                  className={clsx(classNamePrefix + "__comments" + "__comment")}
                  key={index}
                >
                  <div
                    className={clsx(
                      classNamePrefix + "__comments" + "__comment" + "-user"
                    )}
                  >
                    {!comment.avatar ? (
                      <Image
                        src={`/${comment.avatar}.png`}
                        width={25}
                        height={25}
                        alt="commentator avatar"
                      />
                    ) : (
                      <Skeleton width={25} height={25} />
                    )}

                    {!comment.user ? (
                      <span>{comment.user}</span>
                    ) : (
                      <Skeleton width={50} height={25} />
                    )}
                  </div>
                  {!comment.comment ? (
                    <p>{comment.comment}</p>
                  ) : (
                    <Skeleton width={250} height={40} />
                  )}
                </div>
              ))
            ) : (
              <Skeleton width={250} height={35} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
