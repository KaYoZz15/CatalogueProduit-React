import ProductBadge from './ProductBadge'

function ProductDetails({ product, isFavorite, onAddToCart }) {
  return (
    <section className="product-details">
      <h2>Produit sélectionné</h2>

      <div className="details-card">
        <ProductBadge category={product.category} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className={product.available ? 'available' : 'not-available'}>
          {product.available ? 'Disponible' : 'Indisponible'}
        </p>
        <strong>Prix : {product.price} €</strong>

        {isFavorite && <p className="favorite-message">⭐ Ce produit est dans vos favoris.</p>}

        <button onClick={() => onAddToCart(product)}>
          Ajouter au panier
        </button>
      </div>
    </section>
  )
}

export default ProductDetails
