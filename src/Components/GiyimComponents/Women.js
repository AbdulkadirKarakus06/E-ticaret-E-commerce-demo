import React from "react";
import { useParams, Link } from "react-router-dom";

import urun1 from "./Kadin_Giyim/urun-1.webp";
import urun2 from "./Kadin_Giyim/urun-2.webp";
import urun3 from "./Kadin_Giyim/urun-3.webp";
import urun4 from "./Kadin_Giyim/urun-4.webp";
import urun5 from "./Kadin_Giyim/urun-5.webp";
import urun6 from "./Kadin_Giyim/urun-6.webp";
import urun7 from "./Kadin_Giyim/urun-7.webp";
import urun8 from "./Kadin_Giyim/urun-8.webp";
import urun9 from "./Kadin_Giyim/urun-9.webp";
import urun10 from "./Kadin_Giyim/urun-10.webp";

const womenInfo = [
  {
    1: {
      name: "Bayan Triko",
      img: urun1,
      price: "₺350"
    },
    2: {
      name: "Mor T-shirt",
      img: urun2,
      price: "₺385"
    },
    3: {
      name: "Yeşil T-shirt",
      img: urun3,
      price: "₺280"
    },
    4: {
      name: "Siyah T-shirt",
      img: urun4,
      price: "₺299"
    },
    5: {
      name: "Beyaz T-shirt",
      img: urun5,
      price: "₺249"
    },
    6: {
      name: "Eşofman Pantolon",
      img: urun6,
      price: "₺899"
    },
    7: {
      name: "Siyah T-shirt",
      img: urun7,
      price: "₺325"
    },
    8: {
      name: "Uzun Elbise",
      img: urun8,
      price: "₺1299"
    },
    9: {
      name: "Sıfır Kol T-shirt",
      img: urun9,
      price: "₺425"
    },
    10: {
      name: "Gri T-Shirt",
      img: urun10,
      price: "₺333"
    },
  },
];

function Women() {
  const { id } = useParams();
  const womenCloths = womenInfo[0][id];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{womenCloths.name}</h1>
      <img
        src={womenCloths.img}
        alt={womenCloths.name}
        style={{ width: "360px", height: "320px", objectFit: "contain" }}
      />
      <p>
        <strong>Fiyat:</strong> {womenCloths.price}
      </p>
      <p>
        <strong>Özellikler:</strong> {womenCloths.features}
      </p>
      <button><Link to="/">
        Geri Dön
      </Link></button>
      
    </div>
  );
}

export default Women;
