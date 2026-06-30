import ProductBadge from './ProductBadge'

function ProductCard({ name, price, category, image, description, available }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />

      <div>
        <ProductBadge category={category} />
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className={available ? 'available' : 'not-available'}>
          {available ? 'Disponible' : 'Indisponible'}
        </p>
        <strong>{price} €</strong>
      </div>
    </article>
  )
}

export default ProductCard
