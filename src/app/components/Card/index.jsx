// components/Card.js

export default function Card({color, subtitle, title, description}) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
        <div
          className={`h-16 w-16 rounded-lg mb-4`}
          style={{ backgroundColor: color }}
        ></div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">{subtitle}</h3>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">{title}</h2>
        <p className="text-gray-600 font-montserrat">{description}</p>
      </div>
    );
  }
  