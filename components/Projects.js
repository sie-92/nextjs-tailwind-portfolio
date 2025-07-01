export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">Description of project 1.</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">Description of project 2.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
