# Deployment Guide - Portfolio React

This guide will help you deploy your React portfolio to various platforms.

## 📦 Pre-deployment Checklist

- [ ] Test the application locally: `npm run dev`
- [ ] Build the application: `npm run build`
- [ ] Verify the build works: `npm run preview`
- [ ] Update environment variables if needed
- [ ] Update URLs in meta tags and sitemap
- [ ] Test on mobile devices

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for React)

Vercel is the easiest and most recommended platform for React apps.

#### Method 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
cd /Users/idontbyte/Desktop/Coding\ Stuff/Portfolio/portfolio-react
vercel

# For production deployment
vercel --prod
```

#### Method 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
cd /Users/idontbyte/Desktop/Coding\ Stuff/Portfolio/portfolio-react
git init
git add .
git commit -m "Initial commit: React portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-react.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

**Configuration:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify

#### Method 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd /Users/idontbyte/Desktop/Coding\ Stuff/Portfolio/portfolio-react
netlify deploy

# Production deployment
netlify deploy --prod
```

#### Method 2: Netlify Drop

1. Build your project: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

**Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

1. Install gh-pages package:
```bash
cd /Users/idontbyte/Desktop/Coding\ Stuff/Portfolio/portfolio-react
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio-react/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Custom Domain on Vercel

After deploying to Vercel:

1. Go to your project dashboard
2. Click "Settings" > "Domains"
3. Add your custom domain: `srtanveer.dev`
4. Follow the DNS configuration instructions
5. Add these DNS records to your domain provider:

**For root domain (srtanveer.dev):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## 🔧 Environment Variables

If you need environment variables in production:

### Vercel
```bash
# Add via CLI
vercel env add VARIABLE_NAME

# Or via dashboard: Project Settings > Environment Variables
```

### Netlify
```bash
# Add via CLI
netlify env:set VARIABLE_NAME value

# Or via dashboard: Site Settings > Environment Variables
```

## 📝 Post-deployment Steps

1. **Update Sitemap**: Edit `public/sitemap.xml` with your production URL
2. **Submit to Search Engines**:
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters
3. **Test SEO**: Use tools like Lighthouse or web.dev
4. **Monitor Performance**: Set up analytics and monitoring

## 🌐 Custom Domain Configuration

### Update Meta Tags
Update all URLs in your React components (pages) to use your production domain.

### Update Canonical URLs
In each page component, update the Helmet canonical URLs:
```jsx
<link rel="canonical" href="https://srtanveer.dev/page-name" />
```

### Update Sitemap
Edit `public/sitemap.xml` to use your production domain.

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Connect your GitHub repository
2. Every push to main branch triggers a new deployment
3. Pull requests get preview deployments

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version: `node --version`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build locally: `npm run build`

### 404 on Page Refresh
Add redirect rules to handle client-side routing.

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

### CSS Not Loading
- Ensure all paths use `/` prefix for assets
- Check that assets are in the `public` folder
- Verify build output in `dist` folder

## 📊 Performance Optimization

Before deploying:
```bash
# Analyze bundle size
npm run build -- --mode analyze

# Check for unused dependencies
npx depcheck

# Optimize images
# Use tools like imagemin or squoosh.app
```

## 🎉 Quick Deploy Commands

```bash
# Vercel
npm install -g vercel
vercel --prod

# Netlify
npm install -g netlify-cli
netlify deploy --prod

# GitHub Pages
npm run deploy
```

## 📱 Mobile Testing

Before deploying, test on:
- Chrome DevTools Mobile Emulator
- Real mobile devices
- Different screen sizes
- Different browsers (Chrome, Safari, Firefox)

## ✅ Final Checklist

- [ ] Application builds without errors
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Theme toggle persists
- [ ] Contact form works
- [ ] Search functionality works
- [ ] All images load
- [ ] Mobile responsive
- [ ] SEO meta tags correct
- [ ] Analytics tracking works
- [ ] Performance score > 90

---

**Recommended: Deploy to Vercel for the best experience with React apps!**

For support, visit:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
