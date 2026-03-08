# Chunyue's Personal Site

A modern, responsive personal portfolio and blog built with Next.js, React, and Tailwind CSS, featuring seamless Notion integration for blog content.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Frontend Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **CMS:** [Notion API](https://developers.notion.com/) (via [react-notion-x](https://github.com/NotionX/react-notion-x))
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Features

- **Dynamic About Me:** A clean introduction and professional summary.
- **Interactive Resume:** Detailed employment history and skill showcase.
- **Notion-Powered Blog:** Write content in Notion and have it automatically rendered on your site with high fidelity.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
- **Modern UI:** Glassmorphism effects, neon accents, and smooth transitions.

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-site.git
   cd personal-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Notion credentials (if applicable):
   ```env
   NOTION_TOKEN=your_notion_token
   NOTION_DATABASE_ID=your_database_id
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📝 Project Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable React components (AboutMe, Resume, Blogs, etc.).
- `src/data/`: Static data and TypeScript interfaces.
- `public/`: Static assets like images and icons.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
