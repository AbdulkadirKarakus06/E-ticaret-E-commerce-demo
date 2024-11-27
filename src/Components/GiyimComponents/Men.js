import React from "react";
import { useParams, Link } from "react-router-dom";

import urun1 from "./Erkek_Giyim/uruun-1.webp";
import urun2 from "./Erkek_Giyim/uruun-2.webp";
import urun3 from "./Erkek_Giyim/uruun-3.webp";
import urun4 from "./Erkek_Giyim/uruun-4.webp";
import urun5 from "./Erkek_Giyim/uruun-5.webp";
import urun6 from "./Erkek_Giyim/uruun-6.webp";
import urun7 from "./Erkek_Giyim/uruun-7.webp";
import urun8 from "./Erkek_Giyim/uruun-8.webp";
import urun9 from "./Erkek_Giyim/uruun-9.webp";
import urun10 from "./Erkek_Giyim/uruun-10.webp";


const menInfo = [
  {
    1: {
      name: "Siyah T-shirt",
      img: urun1,
      price: "₺350"
    },
    2: {
      name: "Laciver T-shirt",
      img: urun2,
      price: "₺385"
    },
    3: {
      name: "Mavi T-shirt",
      img: urun3,
      price: "₺280"
    },
    4: {
      name: "Miav T-shirt",
      img: urun4,
      price: "₺299"
    },
    5: {
      name: "Bordo T-shirt",
      img: urun5,
      price: "₺249"
    },
    6: {
      name: "Siyah Gömlek",
      img: urun6,
      price: "₺899"
    },
    7: {
      name: "Yakalı T-shirt",
      img: urun7,
      price: "₺325"
    },
    8: {
      name: "Beyaz Gömlek",
      img: urun8,
      price: "₺1299"
    },
    9: {
      name: "Gri Gömlek",
      img: urun9,
      price: "₺425"
    },
    10: {
      name: "Siyah Pantolon",
      img: urun10,
      price: "₺333"
    },
  },
];
function Men() {
  const { id } = useParams();
  const mencloths = menInfo[0][id];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{mencloths.name}</h1>
      <img
        src={mencloths.img}
        alt={mencloths.name}
        style={{ width: "360px", height: "320px", objectFit: "contain" }}
      />
      <p>
        <strong>Fiyat:</strong> {mencloths.price}
      </p>
      <p>
        <strong>Özellikler:</strong> {mencloths.features}
      </p>

      <button><Link to="/">
        Geri Dön
      </Link></button>
      
    </div>
  );
}

export default Men;
