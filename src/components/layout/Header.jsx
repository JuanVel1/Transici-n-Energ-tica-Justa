import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Navigation items with their respective routes
  const navItems = [
    { 
      label: "Table", 
      route: "/table",
      hoverColor: "#007BFF" // Azul Brillante
    },
    { 
      label: "Overview", 
      route: "/overview",
      hoverColor: "#E6F7E6" // Verde Suave
    },
    { 
      label: "Calculator", 
      route: "/calculator",
      hoverColor: "#FFC107" // Amarillo Solar
    },
    { 
      label: "Dashboard", 
      route: "/dashboard",
      hoverColor: "#E6F2FA" // Azul Claro
    }
  ];

  return (
    <header className="bg-[#003B73] shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-white hover:text-[#FFC107] transition duration-300"
          >
            EcoEnergy Insights
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6 text-xl text-white font-medium">
              {navItems.map((item) => (
                <li 
                  key={item.route}
                  className={`
                    transition duration-300 
                    ${location.pathname === item.route 
                      ? 'text-[#FFC107]' 
                      : 'hover:text-[#FFC107]'}
                  `}
                >
                  <Link
                    to={item.route}
                    style={{ 
                      transition: 'color 0.3s ease',
                      color: location.pathname === item.route ? '#FFC107' : 'inherit'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}