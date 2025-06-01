# Civix UI Design System Documentation

A comprehensive atomic design system built for modern web applications with React, TypeScript, and Tailwind CSS.

## 🎯 Overview

The Civix UI Design System follows **Atomic Design methodology** to create a scalable, maintainable, and consistent component library. Each component is thoroughly documented with:

- **Interactive examples** - See components in action
- **API documentation** - Complete props and configuration
- **Usage guidelines** - Do's and don'ts for best practices
- **Accessibility notes** - WCAG compliance and screen reader support
- **Design system integration** - How components work together

## 📚 Component Hierarchy

### 🔸 Atoms
Basic building blocks that cannot be broken down further:
- **Button** - Interactive elements for user actions
- **Input** - Form controls for text input
- **Label** - Accessible labels for form controls
- **Textarea** - Multi-line text input

### 🔹 Molecules  
Simple combinations of atoms that work together:
- **Card** - Container component for related content
- *Form Field* - Input + Label combinations (planned)
- *Search Box* - Input + Button for search (planned)

### 🔷 Organisms
Complex components made up of atoms and molecules:
- *Header* - Site navigation and branding (planned)
- *Footer* - Site information and links (planned)
- *Contact Form* - Complete form structures (planned)

## 🚀 Features

### **Interactive Documentation**
- Live component previews
- Copy-paste code examples
- Multiple variant demonstrations
- State management examples

### **Accessibility First**
- WCAG 2.1 AA compliance
- Screen reader support
- Keyboard navigation
- Focus management

### **Developer Experience**
- TypeScript support
- IntelliSense autocomplete
- Consistent API patterns
- Comprehensive error handling

### **Theming & Customization**
- Dark mode support
- CSS custom properties
- Tailwind CSS integration
- Component variants

## 📖 Documentation Structure

Each component documentation includes:

1. **Overview** - Purpose and use cases
2. **Examples** - Interactive component previews
3. **API Reference** - Props, types, and defaults
4. **Usage Guidelines** - Best practices and patterns
5. **Accessibility** - Screen reader and keyboard support
6. **Design Integration** - How it fits in the system

## 🎨 Design Principles

### **Consistency**
Maintain visual and functional consistency across all components and interactions.

### **Accessibility** 
Built with accessibility in mind, supporting screen readers and keyboard navigation.

### **Modularity**
Components are designed to be composable and reusable across different contexts.

### **Performance**
Optimized for performance with minimal bundle size and efficient rendering.

## 🛠 Development

### Local Development
```bash
npm run dev
```

### Component Creation
When creating new components:

1. Add the component to `src/components/ui/`
2. Create documentation in `src/components/docs/components/`
3. Add to the component registry in `src/components/docs/index.tsx`
4. Follow the established documentation patterns

### Testing
- Visual testing with component previews
- Accessibility testing with screen readers
- Cross-browser compatibility
- Mobile responsiveness

## 📝 Contributing

When contributing to the design system:

1. Follow atomic design principles
2. Include comprehensive documentation
3. Add interactive examples
4. Ensure accessibility compliance
5. Test across devices and browsers

## 🔗 Related Resources

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ for the Civix community** 