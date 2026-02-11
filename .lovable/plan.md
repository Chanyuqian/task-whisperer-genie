

# Kanban Board with AI Assistant

## Overview
A beautiful, interactive Kanban board with drag-and-drop task management, a task-aware AI chatbot, and persistent storage — all with a polished dark/light UI inspired by the reference image.

---

## 1. Authentication
- Clean login and signup pages with email/password
- Protected routes so only logged-in users see their board
- User profile avatar in the top nav bar

## 2. Kanban Board
- **Two columns**: To-Do and In Progress
- **Rich task cards** with:
  - Title and description
  - Color-coded tags/labels (e.g., "Web Design", "Mobile App")
  - Priority indicator (low/medium/high)
  - Due date
  - Progress bar with percentage
- **Drag and drop** to move tasks between columns
- **Create task** button that opens a form/dialog to fill in all card details
- **Edit and delete** tasks via a card menu (three-dot icon)

## 3. Layout & Design
- Inspired by the reference image: clean sidebar navigation, spacious card layout
- Dark sidebar with icon navigation
- Top bar with search and user profile
- Smooth animations on drag, card creation, and transitions
- Responsive design for desktop and tablet

## 4. AI Chat Assistant (Sidebar Panel)
- Slide-out chat panel accessible from the sidebar
- **Task-aware**: The AI knows your current tasks and can help you prioritize, suggest next steps, break down tasks, or answer questions about your board
- Streaming responses for a smooth chat experience
- Powered by Lovable AI (Gemini) via a backend edge function

## 5. Database & Persistence
- All tasks saved to a Supabase database in real-time
- Data tied to your user account so it's private and persistent
- Load your board exactly as you left it when you return

## Tech Stack
- **Frontend**: React + Tailwind CSS + shadcn/ui components
- **Drag & Drop**: Built-in drag-and-drop or a lightweight library
- **Backend**: Lovable Cloud (Supabase) for auth, database, and AI edge functions
- **AI**: Lovable AI Gateway for the task-aware chatbot

