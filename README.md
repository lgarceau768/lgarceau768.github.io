# Portfolio

A professional, open-source portfolio website built with Angular and Angular Material. Easily showcase your skills, projects, resume, and contact information with a modern, responsive design.

## Features
- **About**: Brief bio, skills, and interests
- **Projects**: Showcase of personal/professional projects with GitHub and live demo links
- **Resume**: Downloadable PDF and/or interactive resume
- **Contact**: Contact form and quick links to your platforms
- **Dark Mode**: Theme switcher for light/dark mode (Angular Material theming)
- **Responsive**: Mobile-friendly and accessible
- **Easy Customization**: Update content, colors, and branding easily

## Tech Stack
- [Angular](https://angular.io/) (v19+)
- [Angular Material](https://material.angular.io/)
- SCSS for styling
- TypeScript

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Angular CLI](https://angular.io/cli)

### Installation
```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
git checkout setup-readme
npm install
```

### Development Server
```bash
ng serve
```
Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Building for Production
```bash
ng build --configuration production
```

## Branching Strategy
- `main`: Production-ready code
- `develop`: Active development
- `setup-readme` (feature branch): Updating documentation and setup
- Use feature branches for new features or fixes, then open a PR to `develop` or `main` as appropriate.

## Contributing
Contributions are welcome! Please open issues or pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Customization
- Update content in the `/src/app` directory
- Change colors and branding in `src/styles.scss` and Angular Material theme files
- Add your resume PDF to the `assets` folder
- Update social/contact links in the Contact section

## License
MIT License — see [LICENSE](LICENSE)

## Contact & Social
- [LinkedIn](https://linkedin.com/in/lukegarceau)
- [GitHub](https://github.com/<your-username>)

---

Built with ❤️ using Angular.
