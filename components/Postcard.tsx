import Link from "next/link";

type PostCardProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
};

export default function PostCard({
  title,
  excerpt,
  image,
  category,
  date,
  slug,
}: PostCardProps) {
  return (
    <article className="article-card">
      <img src={image} alt={title} />

      <div className="article-content">
        <span className="category">{category}</span>

        <h3>{title}</h3>

        <p>{excerpt}</p>

        <small>{date}</small>

        <br />

        <Link href={slug}>Read More →</Link>
      </div>
    </article>
  );
}
