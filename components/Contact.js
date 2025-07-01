export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="space-y-4">
          <input className="w-full border p-2" type="text" placeholder="Your Name" />
          <input className="w-full border p-2" type="email" placeholder="Your Email" />
          <textarea className="w-full border p-2" rows="4" placeholder="Your Message"></textarea>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
