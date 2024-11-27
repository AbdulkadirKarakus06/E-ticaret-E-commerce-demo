import React from "react";
import { Link } from "react-router-dom";

import urun1 from '../GiyimComponents/Cocuk_Giyim/ur-1.webp';
import urun2 from '../GiyimComponents/Cocuk_Giyim/ur-2.webp';
import urun3 from '../GiyimComponents/Cocuk_Giyim/ur-3.webp';
import urun4 from '../GiyimComponents/Cocuk_Giyim/ur-4.webp';
import urun5 from '../GiyimComponents/Cocuk_Giyim/ur-5.webp';
import urun6 from '../GiyimComponents/Cocuk_Giyim/ur-6.webp';
import urun7 from '../GiyimComponents/Cocuk_Giyim/ur-7.webp';
import urun8 from '../GiyimComponents/Cocuk_Giyim/ur-8.webp';
import urun9 from '../GiyimComponents/Cocuk_Giyim/ur-9.webp';
import urun10 from '../GiyimComponents/Cocuk_Giyim/ur-10.webp';

const childrenInfo = [
  {
    id: 1,
    name: "Atatürk T-shirt",
    img: urun1,
    price: "₺350"
  },
  {
    id: 2,
    name: "Hummel T-shirt",
    img: urun2,
    price: "₺385"
  },
  {
    id: 3,
    name: "Adidas Eşortman",
    img: urun3,
    price: "₺280"
  },
  {
    id: 4,
    name: "Turkuaz T-shirt",
    img: urun4,
    price: "₺299"
  },
  {
    id: 5,
    name: "Gri T-shirt",
    img: urun5,
    price: "₺249"
  },
  {
    id: 6,
    name: "Sarı T-shirt",
    img: urun6,
    price: "₺899",
  },
  {
    id: 7,
    name: "Kot Pantolon",
    img: urun7,
    price: "₺325"
  },
  {
    id: 8,
    name: "Şort",
    img: urun8,
    price: "₺1299"
  },
  {
    id: 9,
    name: "Gri Şort",
    img: urun9,
    price: "₺425"
  },
  {
    id: 10,
    name: "Siyah Pantolon",
    img: urun10,
    price: "₺333"
  },
];

function ChildrenPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>Çocuk Giyim </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {childrenInfo.map((cPage) => (
          <Link
            key={cPage.id}
            to={`/children/${cPage.id}`}
            style={{ margin: "20px", textDecoration: "none", color: "grey" }}
          >
            <img
              src={cPage.img}
              alt={cPage.name}
              style={{ width: "300px", height: "250px", objectFit: "contain" }}
            />
            <h2>{cPage.name}</h2>
            <p>
              <strong>Fiyat:</strong> {cPage.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChildrenPage;
