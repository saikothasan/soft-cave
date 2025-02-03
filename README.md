# Mini APK - Android App Download Platform

![TypeScript](https://img.shields.io/badge/TypeScript-99%25-blue)
![Next.js](https://img.shields.io/badge/Next.js-13%2B-black)
![License](https://img.shields.io/badge/license-MIT-green)

Mini APK is a modern web application built with Next.js that provides a platform for downloading Android applications. It features a clean, responsive interface and robust functionality for browsing, searching, and downloading Android apps.

## 🚀 Features

- 📱 Browse and download Android applications
- 🔍 Advanced search functionality
- 📂 Category-based app organization
- ⭐ Editor's Choice selections
- 💾 Detailed app information and screenshots
- 🌙 Dark/Light theme support
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Content:** Markdown with Gray Matter
- **Icons:** Lucide React

## 🏗️ Project Structure

```

soft-cave/
├── app/                    # Next.js app directory
│   ├── app/               # App details pages
│   ├── category/          # Category pages
│   ├── editors-choice/    # Editor's choice page
│   └── ...               # Other app routes
├── components/            # React components
├── content/              # Markdown content
│   └── apps/            # App markdown files
├── api/                  # API functions
├── hooks/               # Custom React hooks
├── public/              # Static assets
└── types.ts            # TypeScript types

```plaintext

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/saikothasan/soft-cave.git
cd soft-cave
```

2. **Install dependencies**


```shellscript
npm install
# or
yarn install
```

3. **Run the development server**


```shellscript
npm run dev
# or
yarn dev
```

4. **Open your browser**


Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Adding New Apps

To add a new app:

1. Create a new markdown file in `content/apps/`
2. Include required frontmatter metadata:

1. title
2. description
3. image
4. version
5. category
6. etc.



3. Add the app content in markdown format


Example:

```markdown
---
id: "app-id"
title: "App Name"
description: "App description"
image: "app-image-url"
version: "1.0.0"
category: "Category"
developer: "Developer Name"
lastUpdated: "2024-02-17"
downloads: 1000000
rating: 4.5
tags: ["tag1", "tag2"]
---

# App content here
```

## 🔒 Environment Variables

Create a `.env.local` file with the following variables:

```plaintext
NEXT_PUBLIC_SITE_URL=your-site-url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saikot Hasan**

- GitHub: [@saikothasan](https://github.com/saikothasan)


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)



Made with ❤️ by [Saikot Hasan](https://github.com/saikothasan)
