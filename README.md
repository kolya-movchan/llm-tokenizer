# Modern Astro Website Template

A powerful, SEO-optimized, and performance-focused website template built with Astro. This template provides a solid foundation for building modern websites with best practices in mind.

## ✨ Features

- 🚀 **Built with Astro** - Leverage the power of Astro's partial hydration and static site generation
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📱 **Responsive Design** - Mobile-first approach with responsive layouts
- 🌐 **SEO Optimized** - Built-in SEO features with sitemap generation
- 🔍 **TypeScript** - Type-safe development experience
- 🌍 **Internationalization Ready** - Built-in support for multiple languages
- 🎯 **Performance First** - Optimized for Core Web Vitals
- 🛠 **Developer Experience** - Modern development setup with hot reloading

## 📦 Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other static assets
│   ├── components/     # Reusable UI components
│   ├── config/         # Configuration files
│   ├── content/        # Content collections
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route components
│   │   └── [...lang]/  # Internationalized routes
│   ├── styles/         # Global styles and Tailwind config
│   └── utils/          # Utility functions and helpers
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## �� Getting Started

1. **Clone the template**
   ```bash
   git clone [your-repo-url]
   cd [your-project-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🛠️ Development

### Available Scripts

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm run dev`     | Start development server                    |
| `npm run build`   | Build for production                        |
| `npm run preview` | Preview production build locally            |

### Key Features in Detail

#### SEO Optimization
- Automatic sitemap generation
- Robots.txt configuration
- Meta tags management
- Structured data support

#### Internationalization
- Language-based routing
- Translation management
- SEO-friendly URL structure

#### Performance
- Static site generation
- Partial hydration
- Image optimization
- CSS optimization

#### Development Experience
- TypeScript support
- Hot module replacement
- Tailwind CSS integration
- Component-based architecture

## �� Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
PUBLIC_SITE_URL=your-site-url
```

### Astro Configuration
The `astro.config.mjs` file contains the main configuration:
- Site URL
- Build output mode
- Integrations (Tailwind, Sitemap)
- Development settings

### Tailwind Configuration
Customize your design system in `tailwind.config.mjs`:
- Color palette
- Typography
- Spacing
- Breakpoints

## 🎨 Customization

### Adding New Pages
1. Create a new `.astro` file in `src/pages/`
2. Import and use layouts from `src/layouts/`
3. Add content and components

### Styling
- Use Tailwind CSS utility classes
- Add custom styles in `src/styles/`
- Override Tailwind configuration in `tailwind.config.mjs`

### Components
- Create reusable components in `src/components/`
- Use TypeScript for type safety
- Follow component documentation

## �� Documentation

For more detailed information about specific features and components, refer to:
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
