# LEADAISY DEPLOYMENT GUIDE - FIRST DOLLAR EDITION

## 🚀 Quick Deploy (2 Hours to Production)

### Prerequisites
- GitHub account
- Vercel account (free)
- Railway/Render account
- Stripe account
- Domain (optional, can use Vercel subdomain)

### Step 1: Deploy Backend (30 mins)

#### Option A: Railway (Recommended)
1. Push code to GitHub if not already done
2. Go to [Railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repo → `python-backend` directory
5. Add environment variables:
   ```
   OPENAI_API_KEY=your-key
   LEADAISY_EMAIL=your-email@gmail.com
   LEADAISY_EMAIL_PASSWORD=your-app-password
   ```
6. Railway will auto-detect Python and deploy
7. Copy the deployment URL (e.g., `https://your-app.railway.app`)

#### Option B: Render
1. Similar process on [Render.com](https://render.com)
2. Create new "Web Service"
3. Connect GitHub repo
4. Set root directory to `python-backend`
5. Build command: `pip install -r requirements.txt`
6. Start command: `uvicorn api:app --host 0.0.0.0 --port $PORT`

### Step 2: Deploy Frontend (30 mins)

1. Go to [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `ui`
4. Add environment variables:
   ```
   BACKEND_URL=https://your-backend.railway.app
   NEXT_PUBLIC_INTERNAL_API_KEY=your-secure-key
   ```
5. Deploy!
6. Your site will be live at `https://your-app.vercel.app`

### Step 3: Add Stripe (1 hour)

1. Create Stripe account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard

3. Create checkout session endpoint in `ui/app/api/checkout/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Leadaisy AI Assistant',
            description: 'AI-powered lead capture for your website',
          },
          unit_amount: 9700, // $97.00
          recurring: {
            interval: 'month',
          },
        },
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/welcome?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pricing`,
      customer_email: email,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
```

4. Update pricing page to use Stripe Checkout:
```typescript
const handleCheckout = async () => {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: userEmail }),
  });
  
  const { sessionId } = await response.json();
  
  // Redirect to Stripe Checkout
  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  await stripe?.redirectToCheckout({ sessionId });
};
```

5. Add environment variables to Vercel:
   - STRIPE_SECRET_KEY
   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

### Step 4: Test Everything

1. Visit your live site
2. Test the chatbot flow on homepage
3. Test the embeddable widget at /widget
4. Test lead capture (should email you)
5. Test payment flow on /pricing
6. Download embed.js file loads properly
7. Verify webhook receives payment confirmation

### Step 5: Get First Customer

#### The Script:
"Hi [Business Owner],

I noticed your website doesn't have a way to capture visitor information when you're closed. 

I built an AI assistant that talks to your website visitors 24/7 and collects their contact info, then emails it straight to you. It's already helping other [dentists/lawyers/plumbers] get 3-5 more leads per week.

Would you like to try it free for 14 days? Takes 5 minutes to add to your site.

Best,
[Your name]"

#### Where to Find Customers:
1. **Local Facebook Groups**: Search "[Your City] Small Business"
2. **LinkedIn**: Connect with local service business owners
3. **Google Maps**: Find businesses with websites but no chat
4. **BNI/Chamber of Commerce**: Network with local businesses

#### The Demo:
1. Show them YOUR site with the chatbot working
2. Show an email with a captured lead
3. Offer to set it up on their site right now
4. Use their free trial to prove value

### Step 6: Manual Onboarding (For Now)

1. **Clone the codebase** for each customer
2. **Update client_config.py** with their info:
   ```python
   CLIENT_NAME = "Smith Dental"
   CLIENT_EMAIL = "dr.smith@smithdental.com"
   CLIENT_INDUSTRY = "dentistry"
   ```
3. **Deploy their instance** (separate Railway/Vercel project)
4. **Generate embed code**:
   ```html
   <script>
     (function() {
       var script = document.createElement('script');
       script.src = 'https://smith-dental.vercel.app/embed.js';
       script.async = true;
       document.head.appendChild(script);
     })();
   </script>
   ```
5. **Help them add to their website**

### 🎯 Success Metrics

**Week 1 Goals:**
- [ ] 1 paying customer ($97 MRR)
- [ ] 10 demos booked
- [ ] 50 cold emails sent

**Month 1 Goals:**
- [ ] 10 paying customers ($970 MRR)
- [ ] 1 customer success story
- [ ] 1 video testimonial

**Key Metric**: Time from "interested" to "chatbot live on their site" = <1 hour

## 🚨 Common Issues & Fixes

1. **CORS errors**: Add your domain to backend CORS settings
2. **Email not sending**: Check email credentials and SMTP settings
3. **Stripe webhook failing**: Verify webhook endpoint secret
4. **Chatbot not showing**: Check embed code and domain whitelist

## 💡 Pro Tips

1. **First 10 customers**: Do everything manually, learn what they need
2. **Price anchoring**: Show them it would cost $2000/month for a human
3. **Urgency**: "Every day without this, you're losing leads to competitors"
4. **Risk reversal**: "If you don't get at least 5 leads in 14 days, I'll personally refund you"

Remember: The goal isn't perfection, it's getting that first dollar. Ship it! 🚀
