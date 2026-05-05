# MMS E-Commerce Website

## Project Overview

Production-ready Next.js React application for MMS LLC - an electrical products e-commerce website for the Mongolian market.

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
mms-react/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (Home)
│   └── globals.css         # Global styles
├── components/
│   ├── TopBar.tsx          # Top navigation bar
│   ├── Header.tsx          # Main header with search & categories
│   ├── Hero.tsx            # Hero banner section
│   ├── CategoryIcons.tsx   # Category icons grid
│   ├── FeaturedProducts.tsx # Featured products section
│   ├── ProductCard.tsx     # Product card component
│   ├── AboutSection.tsx    # About us section
│   ├── SolarProducts.tsx   # Solar products section
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer
├── lib/
│   └── products.ts         # Product data & utilities
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── README.md               # This file
```

## Features

- Smooth scrolling navigation (Home, About, Products, Contact)
- Product catalog with filtering
- Contact form with validation
- Responsive design (mobile, tablet, desktop)
- Category dropdown menu
- Search bar UI
- Multi-section landing page

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Local Development

```bash
# Navigate to project directory
cd mms-react

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create production build
npm run build

# The static files will be in the `dist/` folder
```

## Deployment to Vercel (Permanent)

### Method 1: Deploy with Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd mms-react
   vercel --prod
   ```

4. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Link to existing project? `N` (create new)
   - Project name: `mms-ecommerce`
   - Directory: `./` (current)

5. **Your site will be live at**: `https://mms-ecommerce.vercel.app`

### Method 2: Deploy via GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   cd mms-react
   git init
   git add .
   git commit -m "Initial commit"
   
   # Create a new repository on GitHub named "mms-ecommerce"
   git remote add origin https://github.com/YOUR_USERNAME/mms-ecommerce.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "Add New Project"
   - Import your `mms-ecommerce` repository
   - Framework Preset: Next.js
   - Click "Deploy"

3. **Your site will be live automatically**

### Method 3: Deploy from Local Build

```bash
# Build the project
cd mms-react
npm run build

# Deploy the dist folder
vercel --prod dist/
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add any API keys or configuration here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Custom Domain (Optional)

After deployment:

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Follow DNS configuration instructions

## Updating the Site

### Content Updates
- Edit files in `components/` folder
- Product data is in `lib/products.ts`

### Redeploy
```bash
# After making changes
git add .
git commit -m "Update content"
git push origin main

# Vercel will auto-deploy if connected to GitHub
# Or manually:
vercel --prod
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next dist node_modules
npm install
npm run build
```

### Deployment Issues
- Ensure `next.config.js` has `output: 'export'` for static sites
- Check that all imports are correct
- Verify TypeScript types are valid

## Support

For issues or questions:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
