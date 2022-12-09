import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-evenly">
        <li className="text-5xl mb-10  text-neutral-50	 font-bold" ><Link to="/">Chiste Random</Link></li>
        <li className="text-5xl mb-10  text-neutral-50	 font-bold"><Link to="/categories">Categorias</Link></li>
      </ul>
    </div>
  );
}
