export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface IComment {
  id: number;
  user: string;
  time: number;
  time_ago: string;
  type: string;
  content: string;
  comments: [any];
}
