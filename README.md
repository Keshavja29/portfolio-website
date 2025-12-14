# 🎨 Keshav Jadam - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full Stack Developer with beautiful animations, dark mode, and stunning UI.

## 🌐 Live Demo

**Coming Soon!** Will be deployed on Vercel.

## ✨ Features

### 🎯 Core Features
- **Modern Design** - Clean, professional UI with smooth animations
- **Fully Responsive** - Works perfectly on all devices
- **Interactive Sections** - Hero, About, Skills, Projects, Contact
- **Smooth Scrolling** - Seamless navigation between sections
- **Project Showcase** - All 6 projects with live demo links

### 🌙 Dark/Light Mode
- **Theme Toggle** - Beautiful sun/moon icon button in navbar
- **Persistent Theme** - Saves your preference in localStorage
- **Smooth Transitions** - Elegant color transitions between themes
- **Optimized Colors** - Carefully selected colors for both modes

### ✨ Animations
- **Scroll Animations** - Elements fade in as you scroll
- **Hover Effects** - Interactive hover states on all elements
- **Card Animations** - Beautiful gradient borders and rotating backgrounds
- **Staggered Delays** - Sequential animations for better UX
- **Bounce Effects** - Playful icon animations on hover

### 🎨 Enhanced UI
- **Beautiful Fonts** - Inter for body, Space Grotesk for headings
- **Gradient Cards** - 6 unique gradient color schemes for projects
- **Animated Borders** - Gradient borders appear on hover
- **Tech Badges** - Colorful, animated technology tags
- **Social Links** - GitHub, LinkedIn, Email integration

## 🛠️ Tech Stack

- React 18
- React Icons
- React Scroll
- CSS3 (Custom animations & gradients)
- Google Fonts (Inter + Space Grotesk)
- Responsive Design
- LocalStorage for theme persistence

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Keshavja29/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation with dark mode toggle
│   │   ├── Navbar.css
│   │   ├── Hero.js            # Hero section with animations
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js        # Animated project cards
│   │   ├── Projects.css       # Beautiful gradients & animations
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js                 # Main app with dark mode logic
│   ├── App.css
│   ├── index.js
│   └── index.css              # Global styles, dark mode, animations
├── package.json
└── README.md
```

## 🎨 Color Schemes

### Project Card Gradients
1. **Purple-Pink** - `#667eea → #764ba2`
2. **Pink-Red** - `#f093fb → #f5576c`
3. **Blue-Cyan** - `#4facfe → #00f2fe`
4. **Green-Teal** - `#43e97b → #38f9d7`
5. **Pink-Yellow** - `#fa709a → #fee140`
6. **Cyan-Purple** - `#30cfd0 → #330867`

### Theme Colors
- **Primary** - `#667eea` (Purple)
- **Secondary** - `#764ba2` (Deep Purple)
- **Accent** - `#f093fb` (Pink)

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel --prod
```

### Or Deploy via Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `portfolio-website` repository
5. Click "Deploy"

**That's it!** Your portfolio will be live in 2-3 minutes.

## 📱 Sections

### 1. Hero Section
- Introduction with name
- Animated greeting
- Call-to-action buttons
- Social media links
- Scroll indicator

### 2. About Section
- Personal introduction
- Key highlights
- Statistics
- What I do

### 3. Skills Section
- Frontend technologies
- Backend technologies
- Databases
- Tools & platforms

### 4. Projects Section
All 6 projects with:
- Animated gradient cards
- Project descriptions
- Tech stack badges
- Live demo links
- GitHub repository links
- Beautiful hover effects

**Featured Projects:**
1. Weather Dashboard (React) - **LIVE**
2. Task Management System (MERN)
3. Expense Tracker (MERN)
4. E-Commerce API (Django)
5. Job Portal (Spring Boot)
6. Data Visualization (Python/Streamlit)

### 5. Contact Section
- Contact form
- Email integration
- Social links

### 6. Footer
- Copyright
- Quick links
- Social media

## 🎯 Key Features Explained

### Dark Mode Implementation
- Uses React state and localStorage
- Toggles `dark-mode` class on body
- CSS variables for theme colors
- Smooth color transitions

### Scroll Animations
- CSS keyframe animations
- Fade in, slide in, scale effects
- Staggered delays for sequential appearance
- Intersection Observer ready

### Project Cards
- Gradient border animations
- Rotating background gradients
- Icon bounce effects
- Tech badge hover states
- Smooth transform transitions

## 🎨 Customization

### Change Colors

Edit `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
}
```

### Change Fonts

Edit Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Add More Projects

Edit `src/components/Projects.js` and add to the `projects` array.

## 📸 Screenshots

[Add screenshots after deployment]

## 🔮 Future Enhancements

- [ ] Blog section
- [ ] Testimonials section
- [ ] Resume download
- [ ] Project filters
- [ ] More animation effects
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility improvements

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Connect

- **Email:** keshavja29@gmail.com
- **LinkedIn:** [linkedin.com/in/keshavjat](https://linkedin.com/in/keshavjat)
- **GitHub:** [github.com/Keshavja29](https://github.com/Keshavja29)

---

**Made with ❤️ by Keshav Jadam**
