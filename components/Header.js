export default function Header() {
  return (
    <header className="p-4 shadow bg-white sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <span className="font-bold text-xl">My Portfolio</span>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
