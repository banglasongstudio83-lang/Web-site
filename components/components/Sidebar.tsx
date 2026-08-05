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
  "Health Tips",
  "Family Life",
];

const latestPosts = [
  {
    title: "নবজাতকের যত্ন নেওয়ার ১০টি উপায়",
    slug: "#",
  },
  {
    title: "গর্ভাবস্থায় স্বাস্থ্যকর খাবার",
    slug: "#",
  },
  {
    title: "শিশুর ঘুম কেন গুরুত্বপূর্ণ?",
    slug: "#",
  },
  {
    title: "পরিবারে সুখী পরিবেশ তৈরির উপায়",
    slug: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3>📂 Categories</h3>

        <ul>
          {categories.map((item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="widget">
        <h3>📰 Latest Articles</h3>

        <ul>
          {latestPosts.map((post) => (
            <li key={post.title}>
              <Link href={post.slug}>
                {post.title}
              </Link>
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
