export default function Hero() {
  return (
    <section className="text-center py-20" id="hero">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="mx-auto rounded-full w-32 h-32"
      />
      <h1 className="text-4xl font-bold mt-4">Hi, I'm [Your Name]</h1>
      <p className="mt-2 text-gray-600">Full Stack Developer</p>
    </section>
  );
}
