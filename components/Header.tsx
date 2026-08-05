export default function Header() {
  return (
    <header className="header">

      <div className="container navbar">

        <div className="logo">
          👶 Baby Family Blog
        </div>

        <nav>
          <ul className="menu">

            <li><a href="/">হোম</a></li>

            <li><a href="/blog">ব্লগ</a></li>

            <li><a href="/category">ক্যাটাগরি</a></li>

            <li><a href="/about">আমাদের সম্পর্কে</a></li>

            <li><a href="/contact">যোগাযোগ</a></li>

          </ul>
        </nav>

      </div>

    </header>
  );
}
