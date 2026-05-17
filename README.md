# Glow Beauty — Luxury E-commerce

A full-stack luxury beauty e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS. Features a curated shopping experience with cart, simulated checkout, product categories, customer reviews, and a refined editorial design system.

> **Reveal your natural beauty**

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with a custom luxury palette (soft pink, nude, white, black)
- **Typography**: Playfair Display + Cormorant Garamond + Inter
- **State**: React Context API + sessionStorage
- **Icons**: Lucide React
- **Backend**: Next.js API Routes (serverless functions)
- **Deployment**: Vercel

## Features

### Pages
- **Home** with hero banner ("Reveal Your Natural Beauty"), categories, bestsellers, offers, philosophy, brand values, customer reviews, newsletter
- **Shop all** with category filters
- **Product detail** with shade picker, quantity, tabs, related products
- **5 category pages**: Lipsticks, Foundation, Eyeshadow, Skincare, Brushes
- **Shopping cart & checkout** (2-step flow)
- **Order confirmation** with order number
- **About Us** with brand story and values
- **Contact Us** with form and social media
- **Offers** (sale) section
- **Search** results page

### Functionality
- Full shopping cart (add, remove, update quantities)
- Cart drawer (slide-in panel)
- Persistent cart via sessionStorage
- Simulated checkout flow
- Real-time search across products
- Category filtering
- Discount support with crossed-out original prices
- Star ratings and review counts
- Order ID generation
- Contact form submission
- Responsive design (mobile + desktop)

## Project structure

```
glow-beauty/
├── app/
│   ├── api/
│   │   ├── products/route.ts    # GET products (filter by category or query)
│   │   ├── orders/route.ts      # POST/GET orders
│   │   ├── reviews/route.ts     # GET reviews
│   │   └── contact/route.ts     # POST/GET contact messages
│   ├── about/page.tsx
│   ├── cart/page.tsx            # Cart + checkout (combined)
│   ├── category/[slug]/page.tsx
│   ├── checkout/success/page.tsx
│   ├── contact/page.tsx
│   ├── offers/page.tsx
│   ├── products/
│   │   ├── page.tsx             # All products
│   │   └── [id]/page.tsx        # Product detail
│   ├── search/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                 # Home
├── components/
│   ├── CartDrawer.tsx           # Slide-in cart panel
│   ├── Footer.tsx
│   ├── Navbar.tsx               # With announcement bar + search
│   └── ProductCard.tsx
├── lib/
│   ├── cart-context.tsx         # Cart state management
│   └── products.ts              # Product data + reviews + helpers
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── package.json
```

## Running locally

You need Node.js 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying to Vercel

1. Push to a GitHub repository
2. Go to vercel.com → Import Project → select the repo
3. Click Deploy
4. Live in ~90 seconds at `your-project.vercel.app`

## API endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products. Filter: `?category=lipsticks` or `?q=lipstick` |
| POST | `/api/orders` | Create an order |
| GET | `/api/orders` | List all orders (session) |
| GET | `/api/reviews` | List customer reviews |
| POST | `/api/contact` | Submit a contact message |
| GET | `/api/contact` | List submitted messages |

## Color palette

| Token | Hex | Use |
|-------|-----|-----|
| Ink | #0A0A0A | Primary text, buttons |
| Ink soft | #1A1A1A | Secondary text |
| Ink mid | #3D3D3D | Tertiary text |
| Ink light | #6B6B6B | Quaternary text |
| Bone | #FAF7F2 | Secondary backgrounds |
| Nude 50–500 | #FBF8F5 → #A8876A | Beige tones |
| Pink 50–500 | #FDF6F4 → #C66A5C | Sale, accents |
| White | #FFFFFF | Primary background |

## Categories

| Slug | Label |
|------|-------|
| `lipsticks` | Lipsticks |
| `foundation` | Foundation |
| `eyeshadow` | Eyeshadow |
| `skincare` | Skincare |
| `brushes` | Brushes |

## Notes

This is a school project. Payments are simulated and no real transactions occur. Orders are stored in memory and reset when the serverless function cycles. For a production version, integrate a database (Supabase, Neon) and a payment processor (Stripe).

## License

Built for educational purposes.
