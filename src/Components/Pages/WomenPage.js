import React from 'react';
import { Link } from 'react-router-dom';
import urun1 from '../GiyimComponents/Kadin_Giyim/urun-1.webp';
import urun2 from '../GiyimComponents/Kadin_Giyim/urun-2.webp';
import urun3 from '../GiyimComponents/Kadin_Giyim/urun-3.webp';
import urun4 from '../GiyimComponents/Kadin_Giyim/urun-4.webp';
import urun5 from '../GiyimComponents/Kadin_Giyim/urun-5.webp';
import urun6 from '../GiyimComponents/Kadin_Giyim/urun-6.webp';
import urun7 from '../GiyimComponents/Kadin_Giyim/urun-7.webp';
import urun8 from '../GiyimComponents/Kadin_Giyim/urun-8.webp';
import urun9 from '../GiyimComponents/Kadin_Giyim/urun-9.webp';
import urun10 from '../GiyimComponents/Kadin_Giyim/urun-10.webp';

const womenInfo = [
    {
            id: 1,
            name: "Bayan Triko",
            img: urun1,
            price: "₺350"
          },
          {
            id: 2,
            name: "Mor T-shirt",
            img: urun2,
            price: "₺385"
          },
          {
            id: 3,
            name: "Yeşil T-shirt",
            img: urun3,
            price: "₺280"
          },
          {
            id: 4,
            name: "Siyah T-shirt",
            img: urun4,
            price: "₺299"
          },
          {
            id: 5,
            name: "Beyaz T-shirt",
            img: urun5,
            price: "₺249"
          },
          {
            id: 6,
            name: "Eşofman Pantolon",
            img: urun6,
            price: "₺899"
          },
          {
            id: 7,
            name: "Siyah T-shirt",
            img: urun7,
            price: "₺325"
          },
          {
            id: 8,
            name: "Uzun Elbise",
            img: urun8,
            price: "₺1299"
          },
          {
            id: 9,
            name: "Sıfır Kol T-shirt",
            img: urun9,
            price: "₺425"
          },
          {
            id: 10,
            name: "Gri T-Shirt",
            img: urun10,
            price: "₺333"
          },
];

function WomenPage() {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{color : 'red'}}>Kadın Giyim </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {womenInfo.map(wInfo => (
          <Link key={wInfo.id} to={`/women/${wInfo.id}`} style={{ margin: '20px', textDecoration: 'none', color: 'grey' }}>
            <img src={wInfo.img} alt={wInfo.name} style={{ width: '300px', height: '250px', objectFit: 'contain' }} />
            <h2>{wInfo.name}</h2>
            <p><strong>Fiyat:</strong> {wInfo.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default WomenPage;