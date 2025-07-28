SvelteKit and Tailwind CSS.

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd fame-tonic-by-rijon

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check
- `npm run lint` - Lint code
- `npm run format` - Format code

## 📁 Project Structure

```
src/
├── app.css          # Tailwind CSS imports
├── app.html         # HTML template
├── routes/          # SvelteKit routes
│   ├── +layout.svelte  # Layout component
│   └── +page.svelte    # Home page
└── lib/             # Shared components
```

## 🌟 Getting Started

1. Visit `http://localhost:5173` to see your application
2. Start editing `src/routes/+page.svelte` to modify the home page
3. Add new routes in the `src/routes/` directory
4. Customize styles in `src/app.css`