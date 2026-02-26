# AstroWind Beginner's Guide: Structure & Customization

Welcome to AstroWind! As a newcomer to the Astro framework and this template, this guide will serve as your manual on how the website works, where to find things, and how to update content, images, and colors for your company, Hoang Nhan Nano Biotech.

---

## 1. Directory Structure Overview

The core of your website lives inside the `src/` folder. Here are the most important directories:

*   **`src/pages/`**: The actual pages of your website (e.g., `index.astro` is your Home page, `about.astro` is your About Us page).
*   **`src/components/`**: Reusable pieces of the website (buttons, logos, etc).
    *   **`src/components/widgets/`**: Large blocks of your page (Hero sections, Features, Contact Forms, Footer, Header).
*   **`src/layouts/`**: Wrappers for your pages that contain the common head tags, SEO metadata, and structural layout.
*   **`src/assets/`**: Where your static files go.
    *   `src/assets/images/`: Put all your photos and logos here.
    *   `src/assets/styles/`: Your global CSS (where colors are usually defined).
*   **`src/config.yaml`**: The main configuration file for site name, base URL, and SEO defaults.
*   **`src/navigation.ts`**: This file controls the links inside your Header (menu) and Footer.

---

## 2. Pages vs. Components vs. Widgets

### Pages (`src/pages/*.astro`)
Pages define the URL routes. When a user goes to `yourwebsite.com/about`, they are looking at `src/pages/about.astro`. 
*   **How it works**: A page typically just brings together a `Layout` and multiple `Widgets`. It doesn't usually contain much custom HTML. Instead, it passes your text and data into the widgets.

### Widgets (`src/components/widgets/*.astro`)
Widgets are the pre-built sections of a page. For example, the `<Hero>` widget or the `<Features2>` widget. 
*   **Roles**: They handle the complex HTML structure and Tailwind CSS styling so you only have to provide the raw content (titles, descriptions, icons, images) from the Page file.

---

## 3. How to Update Content (Text and Links)

To change the text on any page, you will edit the `.astro` file corresponding to that page in `src/pages/`.

**Example: Changing the Hero Title on the Home Page**
1. Open `src/pages/index.astro`.
2. Look for the `<Hero>` component:
```astro
  <Hero>
    <Fragment slot="title">
      High-tech <span class="text-accent">green solutions</span> to agriculture sustainability
    </Fragment>
  </Hero>
```
3. Just change the text inside those tags. Save the file, and the text automatically updates!

**Lists and Features**
Most widgets accept an `items` array. If you want to add or remove a feature from a grid:
```astro
    items={[
      {
        title: 'Crop Immunity Boost',
        description: 'Detail text here.',
        icon: 'tabler:shield-check',
      }
    ]}
```
To update the Header navigation menu or Footer links, open `src/navigation.ts` and modify the titles (`text`) and URLs (`href`).

---

## 4. How to Change Images and Assets

1. **Adding Images**: Add your image to the `src/assets/images/` folder (e.g., `my-new-banner.jpg`).
2. **Using Images**: In your page (like `index.astro`), find the widget that has an `image` property.
3. Change the `src` to point to your new image:
```astro
    image={{
      src: '~/assets/images/my-new-banner.jpg',
      alt: 'Company Banner',
    }}
```
*Note: The `~/` is a shortcut that always points to the `src/` directory.*

---

## 5. Changing Colors and Themes

AstroWind uses **Tailwind CSS** combined with **CSS Variables**.

### Global Brand Colors
Your primary brand colors are defined as variables in `src/assets/styles/tailwind.css`. 
To change the main button colors or accent colors, open `src/assets/styles/tailwind.css` and look for the `:root` pseudo-class:

```css
:root {
  --aw-color-primary: rgb(30 64 175); /* Deep Blue */
  --aw-color-secondary: rgb(30 58 138); 
  --aw-color-accent: rgb(109 40 217);  /* Purple */
  --aw-color-text-default: rgb(17 24 39);
  --aw-color-bg-page: rgb(255 255 255);
}
```
If your company colors are green (e.g., `#16a34a`), you can update these RGB values to match your brand.

### Background Colors on Specific Sections
When you look at widgets in `index.astro`, you might see a background slot:
```astro
    <Fragment slot="bg">
      <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
    </Fragment>
```
To change a section's background to a light green, change `bg-blue-50` to `bg-green-50`. Tailwind uses a standard color palette (e.g., slate, gray, red, green, emerald, blue, indigo). You can search the Tailwind documentation online for color options.

---

## 6. How to Run the Website Locally

Whenever you are working on the website, you should run the development server.
1. Open your terminal.
2. Make sure you are in your project folder (`/home/a/projects/nanobioweb`).
3. Run this command: `npm run dev`
4. Open your web browser and go to the link provided (usually `http://localhost:4321`). 
5. Every time you save a file, the browser will automatically refresh!

When you are ready to publish/deploy, Cloudflare will automatically handle running the build process creating the final optimized files for internet viewing.
