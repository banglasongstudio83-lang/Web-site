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
