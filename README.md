# Boulangerie Bonotti - Site Web

Site web officiel de la Boulangerie Bonotti, artisan boulanger-pâtissier à Lumes (08440).

## Apercu

Site vitrine moderne et épuré présentant :
- Les produits de la boulangerie (pains, viennoiseries, pâtisseries)
- L'histoire et les valeurs de l'établissement
- Une galerie photo
- Les informations de contact et localisation

## Technologies

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styles** : CSS Modules avec variables CSS
- **Polices** : Inter (texte) + Playfair Display (titres)
- **Export** : Site statique (SSG)
- **Hébergement** : Netlify

## Structure du projet

```
Bonotti-WebSites/
├── public/
│   ├── asset/              # Images du site
│   └── robots.txt          # Configuration SEO
├── src/
│   ├── app/
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout principal + SEO
│   │   ├── page.tsx        # Page d'accueil
│   │   ├── page.module.css
│   │   ├── not-found.tsx   # Page 404
│   │   ├── sitemap.ts      # Sitemap dynamique
│   │   └── robots.ts       # Robots.txt dynamique
│   └── components/
│       ├── Header.tsx      # Navigation
│       ├── Hero.tsx        # Section hero
│       ├── Products.tsx    # Section produits
│       ├── About.tsx       # Section à propos
│       ├── Gallery.tsx     # Galerie photos
│       ├── Contact.tsx     # Section contact
│       ├── Footer.tsx      # Pied de page
│       └── *.module.css    # Styles des composants
├── netlify.toml            # Configuration Netlify
├── next.config.js          # Configuration Next.js
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances
```

## Installation

### Prérequis

- Node.js 18.17 ou supérieur
- npm ou yarn

### Étapes

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd Bonotti-WebSites
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le site statique dans `/out` |
| `npm run start` | Lance un serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Déploiement sur Netlify

### Déploiement automatique

1. Connecter le repository GitHub à Netlify
2. Netlify détectera automatiquement la configuration via `netlify.toml`
3. Chaque push sur `main` déclenche un nouveau déploiement

### Déploiement manuel

```bash
# Générer le build
npm run build

# Le dossier `out/` contient le site statique
# Glisser-déposer sur Netlify ou utiliser la CLI
```

### Configuration du domaine

1. Ajouter le domaine personnalisé dans Netlify
2. Configurer les DNS vers Netlify
3. Activer HTTPS (automatique avec Let's Encrypt)

## SEO

Le site est optimisé pour le référencement :

- **Meta tags** : Titre, description, Open Graph, Twitter Cards
- **Schema.org** : Données structurées pour entreprise locale (Bakery)
- **Sitemap** : Généré automatiquement
- **Robots.txt** : Configuration pour les moteurs de recherche
- **Performance** : Images WebP, lazy loading, cache headers

### Vérifications recommandées

Après déploiement, soumettre le site à :
- Google Search Console
- Bing Webmaster Tools

## Personnalisation

### Modifier les informations de contact

Fichier : `src/components/Contact.tsx` et `src/components/Footer.tsx`

### Modifier les métadonnées SEO

Fichier : `src/app/layout.tsx`

### Modifier les couleurs

Fichier : `src/app/globals.css` (section `:root`)

```css
:root {
  --color-primary: #8B4513;      /* Marron principal */
  --color-secondary: #D4A574;    /* Beige doré */
  --color-cream: #FDF8F3;        /* Fond crème */
}
```

### Ajouter des images

1. Placer les images dans `public/asset/`
2. Formats recommandés : WebP (priorité), JPG
3. Mettre à jour les références dans les composants

## Informations de la boulangerie

- **Nom** : Boulangerie Bonotti
- **Adresse** : 12 Grande rue, 08440 Lumes, France
- **Téléphone** : 03 24 57 29 76
- **Email** : laurent.bonotti@orange.fr
- **Facebook** : [Page Facebook](https://www.facebook.com/profile.php?id=100054585604399)
- **Google Maps** : [Voir sur la carte](https://maps.app.goo.gl/7BZEgmr6gAkZMRLL8)

## Licence

Tous droits réservés - Boulangerie Bonotti
