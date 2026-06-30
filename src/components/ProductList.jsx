import ProductCard from './ProductCard'

function ProductList() {
  return (
    <section className="product-list">
      <h2>Nos produits</h2>

      <div className="products-grid">
        <ProductCard
          name="Ordinateur portable"
          price={899}
          category="Informatique"
          description="Un ordinateur pratique pour travailler et étudier."
          available={true}
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        />

        <ProductCard
          name="Souris sans fil"
          price={29}
          category="Accessoires"
          description="Une souris simple et confortable à utiliser."
          available={true}
          image="https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80"
        />

        <ProductCard
          name="Clavier mécanique"
          price={79}
          category="Accessoires"
          description="Un clavier avec des touches agréables pour écrire."
          available={true}
          image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        />

        <ProductCard
          name="Casque audio"
          price={59}
          category="Audio"
          description="Un casque pour écouter de la musique ou travailler."
          available={true}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
        />

        <ProductCard
          name="Écran 24 pouces"
          price={179}
          category="Informatique"
          description="Un écran adapté au travail quotidien sur ordinateur."
          available={false}
          image="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80"
        />
      </div>
    </section>
  )
}

export default ProductList
