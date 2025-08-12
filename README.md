# Pavan B - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth scroll animations, professional design, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with thoughtful typography and spacing
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessible**: ARIA labels, keyboard navigation, and semantic HTML
- **SEO Friendly**: Meta tags and structured data for better search visibility

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ScrollFadeIn.tsx    # Reusable scroll animation component
│   ├── Navigation.tsx      # Sticky navigation with smooth scroll
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── About.tsx          # About section with stats
│   ├── Skills.tsx         # Skills showcase (no percentages)
│   ├── Projects.tsx       # Featured projects gallery
│   ├── Contact.tsx        # Contact form and social links
│   └── Footer.tsx         # Site footer
├── App.tsx                # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Palette**: Professional blue accent (#2563eb) with neutral grays
- **Typography**: Inter font family with proper hierarchy
- **Animations**: Alternating slide directions for visual interest
- **Micro-interactions**: Hover effects, button animations, and transitions
- **Visual Indicators**: Non-numeric skill progress bars with experience labels

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (two column grid)
- **Desktop**: > 1024px (full multi-column layout)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Customization

### Adding New Projects
Edit `src/components/Projects.tsx` and add new project objects to the `projects` array:

```typescript
{
  title: "Your Project",
  description: "Project description",
  tech: ["React", "Node.js"],
  github: "https://github.com/username/repo",
  live: "https://your-project.com",
  image: "project-image-url"
}
```

### Updating Skills
Modify the `skills` array in `src/components/Skills.tsx`:

```typescript
{
  name: "Skill Name",
  level: "Experienced" | "Proficient" | "Familiar",
  years: "2+",
  projects: "Project names using this skill",
  progress: 85 // For visual bar (not displayed as percentage)
}
```

### ScrollFadeIn Component Usage
Wrap any component with the ScrollFadeIn component for animations:

```jsx
<ScrollFadeIn direction="left" delay={0.2}>
  <YourComponent />
</ScrollFadeIn>
```

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting by component
- Optimized bundle size with Vite
- Minimal external dependencies
- Efficient animation triggers with Intersection Observer

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📧 Contact

- **Email**: pavan@example.com
- **GitHub**: [github.com/Pavannrajj](https://github.com/Pavannrajj)
- **LinkedIn**: [linkedin.com/in/pavanrajjj](https://www.linkedin.com/in/pavanrajjj)

---

**Built with ❤️ using React & Tailwind CSS**