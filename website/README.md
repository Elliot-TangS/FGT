# Fly Global Trading Website

This is a Next.js project for Fly Global Trading, a global ICT components distribution company.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1.  Install dependencies:

    ```bash
    npm install
    ```

2.  Run the development server:

    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Contains the page routes and layout.
  - `page.tsx`: Homepage
  - `products/page.tsx`: Products page
  - `solutions/page.tsx`: Solutions page
  - `about/page.tsx`: About Us page
  - `contact/page.tsx`: Contact page
  - `globals.css`: Global styles and Tailwind configuration.
- `components/`: Reusable UI components (Header, Footer, Hero, etc.).
- `public/`: Static assets (images, logos).

## Customization

- **Colors & Theme:** Defined in `app/globals.css` using CSS variables and Tailwind v4 `@theme`.
- **Content:** Text content is directly in the page components.
- **Images:** Place new images in `public/images` and reference them in the code.
