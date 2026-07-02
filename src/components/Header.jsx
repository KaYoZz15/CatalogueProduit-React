function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>Mini Boutique</h1>
          <p>Votre catalogue de produits en React</p>
        </div>

        <div className="cart-count">
          Panier : <strong>{cartCount}</strong> article{cartCount > 1 ? 's' : ''}
        </div>
      </div>
    </header>
  )
}

export default Header
