# Responsive Mobile Navigation Sidebar for INDmoney

## Overview

This project is a responsive mobile navigation sidebar developed as part of a task for the INDmoney Software Engineer Intern position. The sidebar includes a two-level nested accordion to manage multiple URLs and is fully functional across various mobile devices. The solution was built using **Next.js** with **TailwindCSS**, focusing on modularity, reusability, and configurability.

## Goals Achieved

- **Server-Side Rendering (SSR):** The navigation sidebar is rendered on the server side to ensure that all URLs are crawlable and visible in the HTML, even when JavaScript is disabled.
- **Two-Level Nested Accordion:** The sidebar features a two-level nested accordion to display URLs in a user-friendly manner.
- **Responsive Design:** The sidebar is fully responsive and optimized for various mobile devices, ensuring a seamless user experience.
- **Modular & Reusable Code:** The code is designed to be highly modular, allowing easy expansion and configuration. All links are dynamically generated from a JSON file for easy management.

## Tech Stack

- **Next.js:** Utilized for server-side rendering and efficient handling of page routing.
- **TailwindCSS:** Used for styling the sidebar with a focus on responsive design and customizability.
- **JavaScript (React):** Core logic implemented using React components within the Next.js framework.

## Features

- **Server-Side Rendering (SSR):** Ensures SEO optimization and content visibility without relying on JavaScript.
- **Two-Level Nested Accordion:** Intuitive navigation that allows users to access multiple links through expandable sections.
- **Responsive Design:** Adjusts seamlessly to different screen sizes, especially on mobile devices.
- **Modular Code:** Easily configurable to adapt to new URLs or design changes with minimal effort.
- **TailwindCSS Styling:** Leverages TailwindCSS for a streamlined and efficient styling process.

## Installation & Setup

1. **Clone the repository:**
   ```bash
     git clone https://github.com/yourusername/indmoney-sidebar.git
     cd indmoney-sidebar
   ```
2. **Install dependencies:**
   ```bash
      npm install
   ```
3. **Run the development server:**
   ```bash
     npm run dev

4. **View in the browser:**
 Open http://localhost:3000 to see the mobile navigation sidebar in action.
