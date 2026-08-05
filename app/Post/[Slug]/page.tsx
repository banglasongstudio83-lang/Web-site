import Link from "next/link";

type PageProps = {
  params: {
    slug: string;
  };
};

const posts = [
  {
    slug: "baby-care-tips",
    title: "নবজাতকের যত্ন নেওয়ার ১০টি উপায়",
    image: "https://placehold.co/1200x600",
    category: "Baby Care",
    author: "Baby Family Blog",
    date: "05 August 2026",
    content: `
নবজাতকের জন্মের পর প্রথম কয়েক মাস তার যত্ন অত্যন্ত গুরুত্বপূর্ণ।

✔ পর্যাপ্ত ঘুম নিশ্চিত করুন।

✔ সময়মতো বুকের দুধ খাওয়ান।

✔ পরিষ্কার-পরিচ্ছন্ন পরিবেশ বজায় রাখুন।

✔ নিয়মিত চিকিৎসকের পরামর্শ নিন।

✔ শিশুকে ভালোবাসা ও নিরাপদ পরিবেশ দিন।
`,
  },
];

export default async function PostPage({ params }: PageProps) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return (
      <main className="container">
        <h1>404</h1>
        <p>Post not found.</p>

        <Link href="/">← Back Home</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <article className="single-post">
        <img
          src={post.image}
          alt={post.title}
          className="single-post-image"
        />

        <span className="single-category">
          {post.category}
        </span>

        <h1>{post.title}</h1>

        <div className="post-meta">
          <span>👤 {post.author}</span>

          <span>📅 {post.date}</span>
        </div>

        <div className="post-content">
          {post.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <Link href="/">
          ← Back to Home
        </Link>
      </article>
    </main>
  );
}
