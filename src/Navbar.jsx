export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-neutral-800 text-white shadow-md">
      <h1 className="text-2xl font-bold text-orange-500">Logeshwaran</h1>
      <ul className="flex gap-6">
        <li><a href="#top" className="hover:text-orange-400">Home</a></li>
        <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
        <li><a href="#education" className="hover:text-orange-400">Education</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </nav>
  );
}
