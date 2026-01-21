# Documentation Technique - Boulangerie Bonotti

## Table des matières

1. [Architecture du projet](#architecture-du-projet)
2. [Configuration Next.js](#configuration-nextjs)
3. [Composants](#composants)
4. [Styles](#styles)
5. [SEO](#seo)
6. [Déploiement Netlify](#déploiement-netlify)
7. [Maintenance](#maintenance)

---

## Architecture du projet

### Vue d'ensemble

Le site utilise Next.js 14 avec l'App Router pour générer un site statique. Cette approche offre :

- Performance optimale (pré-rendu des pages)
- SEO excellent (HTML complet servi aux moteurs de recherche)
- Hébergement simple et économique (fichiers statiques)

### Structure des fichiers

```text
src/
├── app/                    # App Router Next.js
│   ├── layout.tsx          # Layout racine (SEO global, fonts)
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Variables CSS et styles de base
│   ├── not-found.tsx       # Page 404
│   ├── sitemap.ts          # Générateur de sitemap
│   └── robots.ts           # Générateur de robots.txt
│
└── components/             # Composants React
    ├── Header.tsx          # Navigation sticky
    ├── Hero.tsx            # Bannière principale
    ├── Products.tsx        # Grille des produits
    ├── About.tsx           # Section histoire
    ├── Gallery.tsx         # Galerie photos
    ├── Contact.tsx         # Informations de contact
    ├── Footer.tsx          # Pied de page
    └── *.module.css        # Styles scopés par composant
```

---

## Configuration Next.js

### next.config.js

```javascript
const nextConfig = {
  output: 'export',        // Génère un site statique
  trailingSlash: true,     // URLs avec slash final
  images: {
    unoptimized: true,     // Nécessaire pour export statique
  },
}
```

L'option `output: 'export'` est essentielle pour générer le dossier `out/` contenant les fichiers HTML, CSS et JS statiques.

### TypeScript

Le projet utilise TypeScript avec une configuration stricte pour éviter les erreurs runtime.

---

## Composants

### Header

Navigation fixe qui change de style au scroll :

- Transparent sur le hero
- Fond blanc avec ombre après scroll
- Menu hamburger responsive sur mobile

Props : Aucune

### Hero

Section d'accueil plein écran avec :

- Image de fond (WebP optimisé)
- Titre principal avec animation
- Boutons CTA
- Indicateur de scroll

### Products

Grille de 4 cartes présentant les catégories de produits :

- Pains traditionnels
- Viennoiseries
- Pâtisseries
- Gâteaux sur commande

Les données sont définies en dur dans le composant.

### About

Section deux colonnes :

- Galerie d'images avec badge "30+ ans"
- Texte de présentation
- Valeurs de l'entreprise (icônes)

### Gallery

Grille d'images avec effet hover :

- Layout masonry (grandes et petites images)
- Overlay avec légende au survol
- Lien vers Facebook

### Contact

Informations de contact avec carte Google Maps :

- Adresse, téléphone, email
- Boutons d'action (Maps, Facebook)
- Carte interactive embarquée

### Footer

Pied de page en 4 colonnes :

- Logo et description
- Navigation rapide
- Spécialités
- Contact

---

## Styles

### Variables CSS

Toutes les variables sont définies dans `globals.css` :

```css
:root {
  /* Couleurs */
  --color-primary: #8B4513;
  --color-secondary: #D4A574;
  --color-cream: #FDF8F3;

  /* Espacements */
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Typographie */
  --font-primary: var(--font-inter);
  --font-display: var(--font-playfair);
}
```

### CSS Modules

Chaque composant a son fichier `.module.css` pour éviter les conflits de noms de classes. Les classes sont automatiquement renommées au build.

### Responsive Design

Points de rupture utilisés :

- `1024px` : Tablettes
- `768px` : Mobile

---

## SEO

### Métadonnées

Définies dans `layout.tsx` avec l'API Metadata de Next.js :

- Title et description
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URL
- Geo tags (localisation)

### Schema.org

Données structurées JSON-LD pour le SEO local :

```json
{
  "@type": "Bakery",
  "name": "Boulangerie Bonotti",
  "address": {...},
  "telephone": "...",
  "geo": {...}
}
```

### Sitemap et Robots.txt

Générés automatiquement par Next.js :

- `/sitemap.xml` : Liste des pages
- `/robots.txt` : Instructions pour les crawlers

---

## Déploiement Netlify

### Configuration (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

### Processus de déploiement

1. Push sur la branche `main`
2. Netlify détecte le changement
3. Exécute `npm run build`
4. Publie le contenu de `out/`
5. Invalide le cache CDN

### Headers de sécurité

Configurés dans `netlify.toml` :

- X-Frame-Options
- X-Content-Type-Options
- Cache-Control pour les assets

### Redirections

- HTTP vers HTTPS
- www vers non-www
- Page 404 personnalisée

---

## Maintenance

### Mettre à jour les informations

1. **Contact** : Modifier `Contact.tsx` et `Footer.tsx`
2. **Horaires** : Ajouter dans `Contact.tsx` si nécessaire
3. **Produits** : Modifier le tableau `products` dans `Products.tsx`

### Ajouter des images

1. Placer l'image dans `public/asset/`
2. Préférer le format WebP
3. Mettre à jour les références dans les composants
4. Vérifier que l'attribut `alt` est descriptif

### Modifier les couleurs

Éditer les variables dans `globals.css` section `:root`

### Vérifier les performances

Outils recommandés :

- Google PageSpeed Insights
- Lighthouse (DevTools)
- GTmetrix

### Soumettre aux moteurs de recherche

1. Google Search Console : Ajouter la propriété et soumettre le sitemap
2. Bing Webmaster Tools : Importer depuis Google ou ajouter manuellement

---

## Contacts techniques

Pour toute question technique concernant le site :

- Repository : (ajouter l'URL du repo)
- Hébergement : Netlify
