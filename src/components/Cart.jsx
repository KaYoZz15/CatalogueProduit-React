function Cart({
  cartItems,
  customerName,
  onCustomerNameChange,
  onOrderSubmit,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveFromCart,
  onClearCart,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  return (
    <aside className="cart">
      <div className="cart-heading">
        <h2>Panier</h2>
        <span>{totalItems} article{totalItems > 1 ? 's' : ''}</span>
      </div>

      {cartItems.length === 0 && (
        <p className="empty-cart">Votre panier est vide.</p>
      )}

      {cartItems.length > 0 && (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>{item.price} € l'unité</span>
                </div>

                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => onDecreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                      aria-label={`Retirer une unité de ${item.name}`}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onIncreaseQuantity(item.id)}
                      aria-label={`Ajouter une unité de ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Retirer
                  </button>
                </div>

                <strong className="cart-item-total">
                  {item.price * item.quantity} €
                </strong>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <span>Total</span>
            <strong>{total} €</strong>
          </div>

          <button type="button" className="clear-button" onClick={onClearCart}>
            Vider le panier
          </button>
        </>
      )}

      <form onSubmit={onOrderSubmit} className="order-form">
        <label htmlFor="customerName">Votre nom</label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(event) => onCustomerNameChange(event.target.value)}
          placeholder="Ex : Jean"
        />

        <button type="submit" className="order-button">
          Valider la commande
        </button>
      </form>
    </aside>
  )
}

export default Cart
