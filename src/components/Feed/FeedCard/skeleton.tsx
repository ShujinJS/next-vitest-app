import { clsx } from "clsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function FeedCardSkeleton() {
  const classNamePrefix = "feed-card";

  return (
    <div className={classNamePrefix}>
      <div className={clsx(classNamePrefix + "__identity")}>
        <Skeleton
          circle
          width={35}
          height={35}
          containerClassName="avatar-skeleton"
        />
        <Skeleton width={70} duration={3} />
      </div>

      <div className={clsx(classNamePrefix + "__content")}>
        <Skeleton width={250} height={10} count={1.5} />

        <div className={clsx(classNamePrefix + "__content" + "__images")}>
          <Skeleton width={250} height={100} />

          <div className={clsx(classNamePrefix + "__content" + "__thumbnails")}>
            <Skeleton width={50} height={50} />
          </div>

          <div className={clsx(classNamePrefix + "__interactions")}>
            <Skeleton width={5} height={5} />
            <Skeleton width={5} height={5} />
          </div>
          <div className={clsx(classNamePrefix + "__comments")}>
            <div className={clsx(classNamePrefix + "__comments" + "__comment")}>
              <div
                className={clsx(
                  classNamePrefix + "__comments" + "__comment" + "-user"
                )}
              >
                <Skeleton width={25} height={25} circle />
                <Skeleton width={50} height={25} />
              </div>
              <Skeleton width={250} height={40} />
            </div>
            <Skeleton width={250} height={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
