#!/bin/bash

# Leadaisy Quick Deploy Script
# Run this to deploy to production in minutes!

echo "🚀 Leadaisy Quick Deploy Script"
echo "================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Leadaisy MVP"
fi

# Check for required environment variables
if [ ! -f "python-backend/.env" ]; then
    echo "⚠️  Missing python-backend/.env file!"
    echo "Creating template..."
    cat > python-backend/.env << EOL
OPENAI_API_KEY=your-openai-api-key
LEADAISY_EMAIL=your-email@gmail.com
LEADAISY_EMAIL_PASSWORD=your-app-password
EOL
    echo "✅ Created python-backend/.env - Please add your API keys!"
    exit 1
fi

# Check for frontend env
if [ ! -f "ui/.env.local" ]; then
    echo "⚠️  Missing ui/.env.local file!"
    echo "Creating template..."
    cat > ui/.env.local << EOL
BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_INTERNAL_API_KEY=your-secure-key
STRIPE_PAYMENT_LINK=https://buy.stripe.com/your-link
EOL
    echo "✅ Created ui/.env.local - Please update with production URLs!"
    exit 1
fi

echo ""
echo "📝 Pre-deployment Checklist:"
echo "----------------------------"
echo "1. ✅ Code structure ready"
echo "2. ✅ Git repository initialized"
echo "3. ⏳ Environment variables configured"
echo "4. ⏳ Stripe payment link created"
echo ""
echo "🎯 Next Steps:"
echo "-------------"
echo "1. Create accounts:"
echo "   - GitHub: https://github.com"
echo "   - Vercel: https://vercel.com"
echo "   - Railway: https://railway.app"
echo "   - Stripe: https://stripe.com"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/leadaisy"
echo "   git push -u origin main"
echo ""
echo "3. Deploy Backend (Railway):"
echo "   - Connect GitHub repo"
echo "   - Set root directory to 'python-backend'"
echo "   - Add environment variables"
echo ""
echo "4. Deploy Frontend (Vercel):"
echo "   - Import GitHub repo"
echo "   - Set root directory to 'ui'"
echo "   - Add BACKEND_URL from Railway"
echo ""
echo "5. Create Stripe Payment Link:"
echo "   - Go to https://dashboard.stripe.com/payment-links"
echo "   - Create new link for $97/month subscription"
echo "   - Add link to ui/.env.local"
echo ""
echo "💡 Pro tip: Test locally first!"
echo "   cd python-backend && python -m uvicorn api:app --reload"
echo "   cd ui && npm run dev"
echo ""
echo "📧 Need help? You're the co-founder - figure it out! 😄"
