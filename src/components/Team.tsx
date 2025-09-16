"use client";

const team = [
  {
    id: 1,
    name: "Ana Rodríguez",
    role: "Especialista en Ciberseguridad",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Carlos Pérez",
    role: "Consultor de Tecnología",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 3,
    name: "Laura Gómez",
    role: "Analista de Riesgos",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Team() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Conoce a nuestros expertos
        </h2>
        <p className="text-gray-600 mt-4">
          Un equipo comprometido en proteger a las pequeñas y medianas empresas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-lg p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
