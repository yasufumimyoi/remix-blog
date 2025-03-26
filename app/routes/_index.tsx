import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/utils/api";

export const meta: MetaFunction = () => {
  return [{ title: "<Frontend Notes />" }, { name: "description", content: "Welcome to Remix!" }];
};

export const loader = async () => {
  const posts = await getPosts();
  return Response.json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div>
      <div>「ちょっとした気づきやメモを気楽にアウトプット。ゆるく更新していきます。」</div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
