import { Link } from "@remix-run/react";

export default function Header() {
  const routes = [
    { to: "/about", label: "About" },
    { to: "/", label: "blog" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold">{"<Frontend Notes />"}</h1>
      <nav>
        <ul className="flex gap-4">
          {routes.map((route) => (
            <li key={route.to}>
              <Link to={route.to}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
