import { router } from "../trpc";
import { CommentRouterTrpc } from "./comment";
import { blogList } from "./blogList";
import { blogCreate } from "./blogCreate";
import { blogItem } from "./blogItem";

export const BlogRouterTrpc = router({
  comment: CommentRouterTrpc,
  list: blogList,
  // to add data to the database
  create: blogCreate,
  item: blogItem,
});

/**
 * 
 * [ {id : 1, text: 's'}]
 */

/**
 * [{blogID: 1, id: 5, comment: 'suck'}, {blogID: 1, id: 3, comment: 'x'} ]
 */