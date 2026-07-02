import ProductBadge from './ProductBadge'

function ProductCard({
  product,
  isSelected,
  isFavorite,
  onSelectProduct,
  onToggleFavorite,
}) {
  return (
    <article className={`product-card ${isSelected ? 'selected' : ''}`}>
      <img src={product.image} alt={product.name} />

      <div className="product-card-content">
        <div className="product-card-top">
          <ProductBadge category={product.category} />
          <span className={product.available ? 'stock available' : 'stock not-available'}>
            {product.available ? 'En stock' : 'Indisponible'}
          </span>
        </div>

        <h3>{product.name}</h3>
        <p className="description">{product.description}</p>

        <div className="product-card-bottom">
          <strong>{product.price} €</strong>

          <div className="product-actions">
            <button onClick={() => onSelectProduct(product)}>Détails</button>
            <button
              className="secondary-button"
              onClick={() => onToggleFavorite(product.id)}
            >
              {isFavorite ? '★ Favori' : '☆ Favori'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
