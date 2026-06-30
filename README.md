# Mini Boutique React

## Lancer le projet

```bash
npm install
npm run dev
```

## Questions de compréhension

### 1. Quel est le rôle du composant App ?
Le composant `App` est le composant principal. Il rassemble le header, la liste des produits, les détails et le footer.

### 2. Pourquoi place-t-on les composants dans un dossier components ?
Cela permet de mieux ranger les fichiers. Chaque partie de la page a son propre fichier, donc le projet est plus facile à lire.

### 3. Quelle est la différence entre ProductList et ProductCard ?
`ProductList` affiche la liste des produits. `ProductCard` affiche les informations d'un seul produit.

### 4. Pourquoi le nom ProductCard commence-t-il par une majuscule ?
En React, les composants doivent commencer par une majuscule pour que React les reconnaisse comme des composants.

### 5. À quoi servent les props dans le composant ProductCard ?
Les props servent à envoyer des informations au composant, par exemple le nom, le prix, l'image ou la catégorie du produit.

### 6. Pourquoi peut-on réutiliser plusieurs fois le même composant ProductCard ?
Parce que le composant est le même, mais les props changent pour chaque produit. Cela évite de réécrire le même code.

### 7. Quel composant est le parent de ProductCard ?
Le composant parent de `ProductCard` est `ProductList`.

### 8. Quel composant est le parent principal de toute l’application ?
Le composant principal de l'application est `App`.
