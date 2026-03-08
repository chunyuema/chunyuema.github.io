# Chunyue's Personal Site

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Frontend Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **CMS:** [Notion API](https://developers.notion.com/) (via [react-notion-x](https://github.com/NotionX/react-notion-x))
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## 📝 Project Structure

The project follows a modular architecture for better maintainability and scalability:

- **`src/app/`**: Next.js App Router pages, layouts, and global styles.
- **`src/components/`**: Categorized React components:
  - `ui/`: Atomic, reusable UI elements (NameCard, Skill, etc.).
  - `sections/`: Main page sections (AboutMe, Blogs, Resume).
  - `notion/`: Notion-specific rendering logic and layouts.
- **`src/data/`**: Static data files (BlogEntry, EmploymentEntry).
- **`src/types/`**: Centralized TypeScript interfaces and types.
- **`src/hooks/`**: Custom React hooks (e.g., `useScroll` for scroll detection).
- **`public/`**: Static assets like profile images and icons.

## 📄 License

This project is licensed under the MIT License.
