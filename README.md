# 🧠 AhamAI - Minimalistic AI Chat

A beautiful, minimalistic AI chat web application built with Next.js and shadcn/ui. AhamAI provides a clean, modern interface for AI conversations with advanced features.

## ✨ Features

### 🎨 **Minimalistic Design**
- Clean, neutral color scheme
- Modern UI with shadcn/ui components
- Responsive design for mobile and desktop
- Dark/Light mode support

### 💬 **Chat Interface**
- Real-time message history
- Beautiful message bubbles
- Typing indicators
- Timestamp display

### 🤖 **AI Modes**
- **Normal Mode**: Standard AI conversations
- **Thinking Mode**: AI shows thinking process
- **Research Mode**: Enhanced research capabilities

### 📁 **File Management**
- File upload functionality
- Drag and drop support
- Multiple file types

### 🔍 **Web Search**
- Integrated web search
- Real-time search results
- Search within conversations

### 🔧 **Advanced Features**
- MCP (Model Context Protocol) servers management
- Customizable AI models
- Settings and preferences
- Authentication system

### 🔐 **Authentication**
- Clean sign-in/sign-up pages
- Password strength indicator
- Form validation
- Secure authentication flow

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ahamai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Optimized for readability
- **State Management**: React Hooks

## 📱 Responsive Design

AhamAI is fully responsive and optimized for:
- 📱 Mobile devices (iOS/Android)
- 💻 Desktop computers
- 📟 Tablets
- 🖥️ Large screens

### Mobile Features
- Collapsible sidebar
- Touch-friendly interactions
- Optimized spacing
- Mobile-first design

## 🎨 Design System

### Color Palette
- **Neutral tones** for minimalistic aesthetic
- **High contrast** for accessibility
- **Consistent spacing** throughout
- **Modern typography**

### Components
All components follow shadcn/ui design principles:
- Consistent styling
- Accessible design
- Customizable variants
- Clean animations

## 📂 Project Structure

```
ahamai/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── auth/              # Authentication pages
│   │   │   ├── signin/        # Sign-in page
│   │   │   └── signup/        # Sign-up page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Main chat interface
│   ├── components/            # React components
│   │   └── ui/               # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper functions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── package.json              # Dependencies
└── README.md                 # Project documentation
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for configuration:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXTAUTH_SECRET=your_secret_key
```

### Customization
- Modify `tailwind.config.ts` for theme customization
- Update `globals.css` for custom styles
- Configure components in `src/components/ui/`

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 🎯 Roadmap

- [ ] Real AI integration (OpenAI, Anthropic, etc.)
- [ ] File processing and analysis
- [ ] Advanced search functionality
- [ ] User preferences and settings
- [ ] Chat history persistence
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Export conversations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Next.js](https://nextjs.org/) for the React framework

---

**AhamAI** - Where minimalism meets intelligence. 🧠✨
