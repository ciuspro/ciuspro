# CiusPro - Gaming Earning App

A production-ready React (Vite) landing page and mini site for CiusPro, a gaming earning app. Built with modern web technologies and a high-contrast gaming design system.

## 🎮 Features

- **Responsive Design**: Mobile-first approach, works on all devices (360px - 1440px)
- **Modern Tech Stack**: React 18 + Vite + Tailwind CSS + React Router
- **Interactive Components**: Swiper carousels, collapsible menus, sticky download bar
- **Gaming Aesthetic**: High-contrast design with cyan accents and dark purple theme
- **Accessibility**: Proper focus states, ARIA labels, semantic HTML
- **Performance**: Optimized with Vite for fast development and production builds

## 🎨 Design System

### Colors
- **Background**: `#1A103D` (Dark Purple)
- **Text**: `#EDE9FF` (Light Lavender)
- **Muted**: `#BDB6FF` (Lavender 60%)
- **Accent**: `#00E6FF` (Bright Cyan)
- **Success**: `#16DB65` (Green)
- **Surfaces**: `#241653`, `#2D1C66`

### Typography
- **Font**: Montserrat (weights: 500, 700, 800)
- **Headings**: Large, bold, all-caps CTAs
- **Body**: Clean, readable text with proper hierarchy

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ciuspro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Main landing section
│   ├── StatChips.jsx   # Statistics display
│   ├── PaymentChips.jsx # Payment method icons
│   ├── GameCard.jsx    # Individual game cards
│   ├── GameCarousel.jsx # Swiper carousel for games
│   ├── CollapsibleMenu.jsx # Expandable game categories
│   ├── StickyDownloadBar.jsx # Fixed bottom CTA
│   └── Footer.jsx      # Site footer
├── routes/             # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # Company information
│   ├── Blog.jsx        # Blog posts
│   ├── Faqs.jsx        # FAQ accordion
│   └── Help.jsx        # Support page
├── data/               # Mock data
│   ├── games.js        # Game and category data
│   └── faqs.js         # FAQ and blog content
├── styles/             # Global styles
│   └── globals.css     # CSS variables and utilities
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎯 Key Components

### Header
- Fixed navigation with backdrop blur
- Mobile hamburger menu
- Active page highlighting
- Download APK button

### Hero Section
- Two-line headline with accent colors
- Primary CTA with glow effect
- Hero image placeholder
- Floating animated elements

### Game Carousel
- Swiper.js integration
- Responsive slides (1.2 on mobile, up to 5 on desktop)
- Autoplay with pagination
- Hover effects and transitions

### Collapsible Menu
- Custom accordion functionality
- Game categories with expandable lists
- Smooth animations
- Accessible with ARIA attributes

### Sticky Download Bar
- Appears after 300px scroll
- Fixed bottom positioning
- Bonus offer messaging
- Responsive layout

## 🎮 Game Categories

- **Card Games**: Rummy, Teen Patti, Poker
- **Casual Games**: Ludo, Carrom, Snake & Ladder
- **MPL Cricket**: Fantasy leagues, quizzes
- **Slice Games**: Fruit Ninja, Candy Crush
- **Board Games**: Chess, Checkers, Backgammon
- **Rummy Variants**: Gin Rummy, Contract Rummy
- **Ludo Variants**: Classic, Speed, Tournament

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🎨 Custom CSS Classes

- `.card`: Gradient background with shadow
- `.cta`: Primary button with glow effect
- `.ghost-btn`: Transparent button with border
- `.font-montserrat`: Custom font family

## 🔧 Configuration Files

- `vite.config.js`: Vite build configuration
- `tailwind.config.js`: Tailwind CSS customization
- `postcss.config.js`: PostCSS plugins
- `package.json`: Dependencies and scripts

## 📄 Pages

1. **Home** (`/`): Landing page with hero, stats, games
2. **About** (`/about`): Company mission and features
3. **Blog** (`/blog`): Gaming tips and strategies
4. **FAQs** (`/faqs`): Common questions and answers
5. **Help** (`/help`): Support contact information

## 🚀 Performance Features

- **Code Splitting**: Route-based lazy loading
- **Optimized Images**: Placeholder system for assets
- **CSS Optimization**: Tailwind purging in production
- **Bundle Analysis**: Vite's built-in optimization

## 🎯 Future Enhancements

- [ ] Real image assets (hero, game icons, logos)
- [ ] Backend integration for dynamic content
- [ ] User authentication system
- [ ] Real-time game statistics
- [ ] PWA capabilities
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Multi-language support

## 📝 License

This project is created for demonstration purposes. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**CiusPro** - Play Games, Win Real Cash! 🎮💰
