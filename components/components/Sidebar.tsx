export default function Sidebar() {

const popularPosts = [

"৬ মাসের শিশুর খাবারের তালিকা",

"নবজাতকের জ্বর হলে কী করবেন?",

"মায়ের বুকের দুধ বাড়ানোর উপায়",

"শিশুর ওজন না বাড়লে করণীয়",

"নতুন বাবা-মায়ের গাইড"

];

return(

<aside className="sidebar">

<div className="widget">

<h3>🔥 জনপ্রিয় পোস্ট</h3>

<ul>

{
popularPosts.map((post,index)=>(

<li key={index}>

<a href="#">
{post}
</a>

</li>

))
}

</ul>

</div>

<div className="widget ads">

<h3>📢 Advertisement</h3>

<div className="ads-box">

Google AdSense

<br/>

300 × 250

</div>

</div>

</aside>

);

}
import Link from "next/link";
import "./Sidebar.css";

const categories = [
  "Baby Care",
  "Pregnancy",
  "Parenting",
  "Family Life",
  "Health Tips",
];

const recentPosts = [
  {
    title: "10 Baby Care Tips for New Parents",
    slug: "/posts/baby-care-tips",
  },
  {
    title: "Healthy Foods During Pregnancy",
    slug: "/posts/pregnancy-foods",
  },
  {
    title: "How to Build a Happy Family",
    slug: "/posts/happy-family",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3>Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link href={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <h3>Recent Posts</h3>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <h3>Advertisement</h3>
        <div className="ads-box">
          Google AdSense
          <br />
          300 × 250
        </div>
      </div>
    </aside>
  );
}
