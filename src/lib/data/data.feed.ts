interface IFeedData {
  feeds: IFeed[];
}

export interface IFeed {
  op: string;
  avatar?: string;
  images?: IImage[];
  description?: string;
  likes?: ILike[];
  comments?: IComment[];
  shares?: IShare[];
}

interface IImage {
  src: string;
}

interface ILike {
  user: string;
  avatar: string;
}

interface IComment {
  user: string;
  avatar: string;
  comment: string;
}

interface IShare {
  user: string;
  avatar: string;
}

export const feedData: IFeedData = {
  feeds: [
    {
      op: "Test OP",
      avatar: "male_avatar",
      images: [{ src: "feed_card_image" }, { src: "feed_card_image_2" }],
      description: "Test Description",
      likes: [
        {
          user: "Test User",
          avatar: "male_avatar",
        },
      ],
      comments: [
        {
          user: "Test User",
          avatar: "male_avatar",
          comment: "Test Comment",
        },
        {
          user: "Test User",
          avatar: "male_avatar",
          comment: "Test Comment",
        },
      ],
      shares: [
        {
          user: "Test User",
          avatar: "female_avatar",
        },
      ],
    },
    {
      op: "Test OP 2",
      avatar: "female_avatar",
      images: [{ src: "feed_card_image" }, { src: "feed_card_image_2" }],
      description: "Test Description 2",
      likes: [
        {
          user: "Test User",
          avatar: "female_avatar",
        },
        {
          user: "Test User 2",
          avatar: "male_avatar",
        },
        {
          user: "Test User 3",
          avatar: "female_avatar",
        },
      ],
      comments: [
        {
          user: "Test User 2",
          avatar: "female_avatar",
          comment: "Test Comment 2",
        },
      ],
      shares: [
        {
          user: "Test User 2",
          avatar: "male_avatar",
        },
      ],
    },
    {
      op: "Test OP 3",
      avatar: "male_avatar",
      images: [{ src: "feed_card_image" }, { src: "feed_card_image_2" }],
      description: "Test Description 3",
      likes: [
        {
          user: "Test User 3",
          avatar: "female_avatar",
        },
      ],
      comments: [
        {
          user: "Test User 3",
          avatar: "male_avatar",
          comment: "Test Comment 3",
        },
      ],
      shares: [
        {
          user: "Test User 3",
          avatar: "male_avatar",
        },
      ],
    },
  ],
};
