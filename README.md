# Civix UI - Government Component Guidelines

A modern, accessible, and inclusive component guideline library for building government digital services.

## 🎯 Mission

Supporting government agencies worldwide by providing standardized component guidelines, reusable UI patterns, and best-practice checklists for web applications that serve all citizens, including those with
limited digital literacy, disabilities, or access to modern devices.

## 🌟 Key Features

- **Accessibility First**: WCAG 2.1 AA compliant components
- **Mobile-Responsive**: Optimized for all devices and screen sizes  
- **Dual Language Support**: Built-in internationalization capabilities
- **Performance Optimized**: Fast loading and smooth interactions
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/civix-ui.git

# Navigate to the project directory
cd civix-ui

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component guidelines in your browser.

## 📁 Project Structure

```
civix-ui/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── components/      # Interactive component showcase
│   │   ├── guidelines/      # Design principles and standards
│   │   ├── templates/       # Ready-to-use page templates
│   │   ├── resources/       # Documentation and assets
│   │   └── checklist/       # Implementation checklist
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   └── layout/         # Layout components
│   ├── contexts/           # React contexts (theme, etc.)
│   └── lib/                # Utility functions
├── public/                 # Static assets
└── docs/                   # Additional documentation
```

## 🎨 Design Tokens

### Colors

Our color system is designed for high contrast and accessibility:

```css
/* Primary Colors - Government Blue */
--primary-50: #f0f9ff;
--primary-500: #0ea5e9;      // Civix UI Blue
--primary-900: #0c4a6e;

/* Secondary Colors - Neutral Grays */
--secondary-50: #f8fafc;
--secondary-500: #64748b;
--secondary-900: #0f172a;

/* Semantic Colors */
--success-500: #22c55e;      // Success Green
--warning-500: #f59e0b;      // Warning Amber  
--danger-500: #ef4444;       // Error Red
```

### Typography

- **Primary Font**: Inter (Latin scripts)
- **Secondary Font**: System fonts for optimal performance
- **Font Sizes**: Fluid scale from 12px to 72px
- **Line Heights**: Optimized for readability (1.4-1.6)

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with CSS-first configuration
- **Components**: Custom components with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript, and Turbopack

## 📖 Documentation

### Component Categories

1. **Form Components**: Input fields, buttons, checkboxes, radio buttons
2. **Navigation**: Headers, menus, breadcrumbs, pagination
3. **Data Display**: Tables, cards, lists, badges
4. **Feedback**: Alerts, notifications, loading states
5. **Layout**: Grid system, containers, spacing utilities

### Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Visible focus indicators and logical tab order
- **Responsive Text**: Scales appropriately across devices

## 🤝 Contributing

We welcome contributions from developers, designers, and accessibility experts! 

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Commit your changes (`git commit -m 'Add new component'`)
4. Push to the branch (`git push origin feature/new-component`)
5. Open a Pull Request

### Guidelines

This component guideline library is built for modern government services. Contributions should align with:

- **Accessibility**: All components must meet WCAG 2.1 AA standards
- **Performance**: Maintain fast loading times and smooth interactions
- **Usability**: Design for users with varying levels of digital literacy
- **Internationalization**: Support for multiple languages and scripts
- **Mobile-First**: Responsive design that works on all devices
- **Government component guideline libraries worldwide for inspiration**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- WCAG Guidelines for accessibility standards
- Government design systems worldwide for inspiration
- The open source community for tools and libraries

## 📞 Support

- **Documentation**: [Civix UI Documentation](https://civix-ui.example.com)
- **Community**: [GitHub Discussions](https://github.com/your-username/civix-ui/discussions)
- **Issues**: [GitHub Issues](https://github.com/your-username/civix-ui/issues)
- **Email**: support@civix-ui.example.com

---

**Civix UI - Modern Government Component Guidelines** - Building accessible digital services for all citizens 🌐
