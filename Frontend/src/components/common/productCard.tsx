import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  onSelect: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, productName, onSelect }) => {
  return (
    <div style={styles.card}>
      <Image src={imageUrl} alt="Product" width={200} height={200} style={styles.image} />
      <div style={styles.cardFooter}>
        <span style={styles.productName}>{productName}</span>
        <button onClick={onSelect} className="bg-[#0F57C2] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg p-2">Выбрать</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '16px',
    textAlign: 'center' as 'center',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '16px',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
  },
  productName: {
    fontWeight: 'bold',
  }
};

export default ProductCard;
