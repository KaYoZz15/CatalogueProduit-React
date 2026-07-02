import ProductBadge from './ProductBadge'

function ProductDetails({ product, isFavorite, onAddToCart }) {
  return (
    <section className="product-details">
      <h2>Produit sélectionné</h2>

      <div className="details-card">
        <img src={product.image} alt={product.name} />

        <div className="details-content">
          <ProductBadge category={product.category} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className={product.available ? 'available' : 'not-available'}>
            {product.available ? 'Disponible' : 'Indisponible'}
          </p>
          <strong>Prix : {product.price} €</strong>

          {isFavorite && <p className="favorite-message">★ Ce produit est dans vos favoris.</p>}

          <button
            className="add-button"
            onClick={() => onAddToCart(product)}
            disabled={!product.available}
          >
            {product.available ? 'Ajouter au panier' : 'Produit indisponible'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
