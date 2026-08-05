import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import FeaturedPosts from "@/components/FeaturedPosts";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <section className="hero">
          <h1>👶 Baby Family Blog</h1>

          <p>
            শিশু, পরিবার, পুষ্টি ও
            প্যারেন্টিং সম্পর্কিত বাংলা ব্লগ।
          </p>
        </section>

        <SearchBox />

        <div className="content-layout">
          <div className="main-content">
            <FeaturedPosts />
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
