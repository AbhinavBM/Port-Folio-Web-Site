# Abhinav B M - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Software Development Engineer. Built with React, TypeScript, and Tailwind CSS for a sleek, professional presentation.

## 🚀 Live Demo

[View Live Portfolio](https://abhinavbm.vercel.app/)

## 📋 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling Navigation**: Seamless single-page application experience
- **Interactive Sections**:
  - Home: Professional introduction and call-to-action
  - About: Personal background and skills
  - Services: Professional services offered
  - Portfolio: Showcase of projects and work
  - Contact: Functional contact form with Formspree integration
- **Modern UI/UX**: Clean, dark theme with professional aesthetics
- **Active Section Tracking**: Navigation highlights current section
- **Contact Form**: Direct email functionality using Formspree
- **Mobile Navigation**: Responsive dropdown menu for mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Email Service**: Formspree
- **Package Manager**: Yarn
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
Port-Folio-Web-Site/
├── src/
│   ├── DevFolio.tsx      # Main portfolio component
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhinavBM/Port-Folio-Web-Site.git
   cd Port-Folio-Web-Site
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up Formspree (for contact form)**
   - Create an account at [Formspree](https://formspree.io/)
   - Create a form and get the form ID
   - Update the Formspree configuration in `DevFolio.tsx`

4. **Start the development server**
   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update the following in `src/DevFolio.tsx`:
- Name and title in the hero section
- About section content
- Services offered
- Portfolio projects
- Contact information

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component styles are handled with Tailwind CSS classes

### Contact Form
Configure Formspree in the `handleSubmit` function:
```typescript
// Update this with your Formspree form ID
const formId = 'your_form_id';
```

## 🚀 Deployment

### Build for Production
```bash
yarn build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Build the project: `yarn build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository to Netlify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhinav B M**
- Software Development Engineer
- [GitHub](https://github.com/AbhinavBM)
- [LinkedIn](your-linkedin-url)
- [Email](your-email@example.com)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Email functionality by [Formspree](https://formspree.io/)

---

⭐ Star this repository if you found it helpful!
