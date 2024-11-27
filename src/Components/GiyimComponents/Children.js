import React from "react";
import { useParams, Link } from "react-router-dom";

import urun1 from "./Cocuk_Giyim/ur-1.webp";
import urun2 from "./Cocuk_Giyim/ur-2.webp";
import urun3 from "./Cocuk_Giyim/ur-3.webp";
import urun4 from "./Cocuk_Giyim/ur-4.webp";
import urun5 from "./Cocuk_Giyim/ur-5.webp";
import urun6 from "./Cocuk_Giyim/ur-6.webp";
import urun7 from "./Cocuk_Giyim/ur-7.webp";
import urun8 from "./Cocuk_Giyim/ur-8.webp";
import urun9 from "./Cocuk_Giyim/ur-9.webp";
import urun10 from "./Cocuk_Giyim/ur-10.webp";


const childrenInfo = [
  {
    1: {
      name: "Atatürk T-shirt",
      img: urun1,
      price: "₺350"
    },
    2: {
      name: "Hummel T-shirt",
      img: urun2,
      price: "₺385"
    },
    3: {
      name: "Adidas Eşortman",
      img: urun3,
      price: "₺280"
    },
    4: {
      name: "Turkuaz T-shirt",
      img: urun4,
      price: "₺299"
    },
    5: {
      name: "Gri T-shirt",
      img: urun5,
      price: "₺249"
    },
    6: {
      name: "Sarı T-shirt",
      img: urun6,
      price: "₺899"
    },
    7: {
      name: "Kot Pantolon",
      img: urun7,
      price: "₺325"
    },
    8: {
      name: "Şort",
      img: urun8,
      price: "₺1299"
    },
    9: {
      name: "Gri Şort",
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

function Children() {
  const { id } = useParams();
  const childrenCloths = childrenInfo[0][id];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{childrenCloths.name}</h1>
      <img
        src={childrenCloths.img}
        alt={childrenCloths.name}
        style={{ width: "360px", height: "320px", objectFit: "contain" }}
      />
      <p>
        <strong>Fiyat:</strong> {childrenCloths.price}
      </p>
      <p>
        <strong>Özellikler:</strong> {childrenCloths.features}
      </p>
      <button> 
        <Link to="/">
        Geri Dön
      </Link></button>
     
    </div>
  );
}

export default Children;
