import { clsx } from "clsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeedCardSkeleton() {
  const classNamePrefix = "feed-card";

  return (
    <div className={classNamePrefix}>
      <div className={clsx(classNamePrefix + "__identity")}>
        <Skeleton circle containerClassName="avatar-skeleton" />
        <Skeleton duration={3} />
      </div>

      <div className={clsx(classNamePrefix + "__content")}>
        <Skeleton count={1.5} />

        <div className={clsx(classNamePrefix + "__content" + "__images")}>
          <Skeleton />

          <div className={clsx(classNamePrefix + "__content" + "__thumbnails")}>
            <Skeleton />
          </div>

          <div className={clsx(classNamePrefix + "__interactions")}>
            <Skeleton />
            <Skeleton />
          </div>
          <div className={clsx(classNamePrefix + "__comments")}>
            <div className={clsx(classNamePrefix + "__comments" + "__comment")}>
              <div
                className={clsx(
                  classNamePrefix + "__comments__comment" + "-user"
                )}
              >
                <Skeleton circle />
                <Skeleton />
              </div>
              <div
                className={clsx(
                  classNamePrefix + "__comments__comment-user" + "__txt"
                )}
              >
                <Skeleton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
