import React from 'react';
import { Link } from 'react-router-dom';

import urun1 from '../GiyimComponents/Erkek_Giyim/uruun-1.webp';
import urun2 from '../GiyimComponents/Erkek_Giyim/uruun-2.webp';
import urun3 from '../GiyimComponents/Erkek_Giyim/uruun-3.webp';
import urun4 from '../GiyimComponents/Erkek_Giyim/uruun-4.webp';
import urun5 from '../GiyimComponents/Erkek_Giyim/uruun-5.webp';
import urun6 from '../GiyimComponents/Erkek_Giyim/uruun-6.webp';
import urun7 from '../GiyimComponents/Erkek_Giyim/uruun-7.webp';
import urun8 from '../GiyimComponents/Erkek_Giyim/uruun-8.webp';
import urun9 from '../GiyimComponents/Erkek_Giyim/uruun-9.webp';
import urun10 from '../GiyimComponents/Erkek_Giyim/uruun-10.webp';

const menInfo = [
    {
        id: 1,
        name: "Siyah T-shirt",
        img: urun1,
        price: "₺350"
      },
      {
        id: 2,
        name: "Laciver T-shirt",
        img: urun2,
        price: "₺385"
      },
      {
        id: 3,
        name: "Mavi T-shirt",
        img: urun3,
        price: "₺280"
      },
      {
        id: 4,
        name: "Miav T-shirt",
        img: urun4,
        price: "₺299"
      },
      {
        id: 5,
        name: "Bordo T-shirt",
        img: urun5,
        price: "₺249"
      },
      {
        id: 6,
        name: "Siyah Gömlek",
        img: urun6,
        price: "₺899"
      },
      {
        id: 7,
        name: "Yakalı T-shirt",
        img: urun7,
        price: "₺325"
      },
      {
        id: 8,
        name: "Beyaz Gömlek",
        img: urun8,
        price: "₺1299"
      },
      {
        id: 9,
        name: "Gri Gömlek",
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

function MenPage() {
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{color : 'red'}}>Erkek Giyim </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {menInfo.map(mInfo => (
          <Link key={mInfo.id} to={`/men/${mInfo.id}`} style={{ margin: '20px', textDecoration: 'none', color: 'grey' }}>
            <img src={mInfo.img} alt={mInfo.name} style={{ width: '300px', height: '250px', objectFit: 'contain' }} />
            <h2>{mInfo.name}</h2>
            <p><strong>Fiyat:</strong> {mInfo.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenPage;