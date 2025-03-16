import { http } from "msw";

export const handlers = [
  // 記事一覧のモック API
  http.get("http://localhost:3000/api/blog", () => {
    return Response.json({
      contents: [
        { id: "1", title: "最初の記事", content: "<p>これはモックデータです。</p>", image: { url: "https://via.placeholder.com/600" } },
        { id: "2", title: "次の記事", content: "<p>これは別の記事のモックデータです。</p>", image: { url: "https://via.placeholder.com/600" } },
      ],
    });
  }),

  // 記事詳細のモック API
  http.get("http://localhost:3000/api/blog/:postId", ({ params }) => {
    const postId = params.postId;
    return Response.json({
      id: postId,
      title: `記事 ${postId}`,
      content: `<p>記事 ${postId} の詳細コンテンツ</p>`,
      image: { url: "https://via.placeholder.com/600" },
    });
  }),
];
