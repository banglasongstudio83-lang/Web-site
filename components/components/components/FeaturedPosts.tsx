const posts = [
  {
    id: 1,
    title: "৬ মাসের শিশুকে কী কী খাবার দেবেন?",
    image: "https://picsum.photos/400/250?1",
  },
  {
    id: 2,
    title: "নবজাতকের সঠিক ঘুম কত ঘণ্টা হওয়া উচিত?",
    image: "https://picsum.photos/400/250?2",
  },
  {
    id: 3,
    title: "নতুন বাবা-মায়ের জন্য গুরুত্বপূর্ণ ১০টি পরামর্শ",
    image: "https://picsum.photos/400/250?3",
  },
];

export default function FeaturedPosts() {
  return (
    <section className="featured">

      <h2>⭐ Featured Posts</h2>

      <div className="featured-grid">

        {posts.map((post) => (

          <div className="card" key={post.id}>

            <img src={post.image} alt={post.title} />

            <h3>{post.title}</h3>

            <button>Read More</button>

          </div>

        ))}

      </div>

    </section>
  );
}
