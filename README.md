# Portfolio Zakaria Zaroual

Portfolio personnel moderne et responsive développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** avec animations fluides
- **Responsive** sur tous les appareils
- **Performance optimisée** avec Next.js
- **SEO friendly** avec métadonnées optimisées
- **Accessibilité** respectée
- **Thème sombre/clair** automatique

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **React Intersection Observer** - Animations au scroll

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/zakaria-zaroual/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer en développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du projet

```
portfolio/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── Header.tsx           # Navigation
│   ├── Hero.tsx             # Section d'accueil
│   ├── About.tsx            # À propos
│   ├── Experience.tsx       # Expérience professionnelle
│   ├── Projects.tsx         # Projets
│   ├── Skills.tsx           # Compétences
│   ├── Contact.tsx          # Formulaire de contact
│   └── Footer.tsx           # Pied de page
├── public/                  # Assets statiques
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    // Vos couleurs personnalisées
  }
}
```

### Contenu
Modifiez directement les composants pour personnaliser :
- Informations personnelles
- Projets
- Expériences
- Compétences

### Animations
Ajustez les animations dans `tailwind.config.js` :
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  // Vos animations personnalisées
}
```

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1280px+)

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Déployez

### Autres plateformes
```bash
npm run build
npm start
```

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Zakaria Zaroual**
- Email: zakaria.zaroual@utt.fr
- Téléphone: +33 6 98 32 16 09
- LinkedIn: [zakaria-zaroual](https://www.linkedin.com/in/zakaria-zaroual-4626b526a/)

---

Fait avec ❤️ par Zakaria Zaroual