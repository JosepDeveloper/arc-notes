# Arc Note

A **local-first** note-taking application inspired by Apple Notes and Notion, built with **TanStack Start**, **React 19**, and **TypeScript**.

Designed to be:

* ⚡ Instant
* 📴 Offline-first
* 📱 Installable as a PWA
* 🧠 Productivity-optimized
* 🎨 Minimalist and modern

---

# ✨ Vision

Arc Note aims to deliver a fast and fluid experience similar to apps like:

* Apple Notes
* Notion
* Craft
* Obsidian

All information is stored locally using IndexedDB to guarantee:

* Instant startup
* Offline usage
* Reliable persistence
* Native app-like experience

---

# 🚀 Features

## Editor

* ✏️ Block-based editor powered by Yoopta Editor
* 🧱 Notion-like experience
* ⌨️ Keyboard shortcuts
* 💾 Automatic autosave
* 📝 Rich text formatting support
* 📋 Slash commands *(planned)*

---

## Local-first

* 📦 Local persistence with IndexedDB
* ⚡ Instant saving
* 📴 Works offline
* 🔄 Architecture ready for future sync support
* 🆔 Sortable IDs with ULID

---

## User Experience

* 🌙 Automatic dark mode
* 📱 Responsive design
* ⚡ Instant navigation
* 🎨 Minimal UI with shadcn/ui
* 🖥️ Desktop-like experience
* ⌨️ Keyboard-first UX

---

## Performance

* 🔍 Instant local search
* ⚡ Optimized rendering
* 🧠 Local note indexing
* 📚 Virtualization for thousands of notes *(planned)*
* 💤 Lazy loading *(planned)*

---

## PWA

* 📲 Installable on mobile and desktop
* 📴 True offline support with Service Workers
* ⚡ Smart caching
* 🖥️ Fullscreen native app-like experience

---

# 🛠️ Stack

| Technology           | Purpose                      |
| -------------------- | ---------------------------- |
| **TanStack Start**   | Main framework               |
| **React 19**         | Reactive UI                  |
| **TypeScript**       | Static typing                |
| **Tailwind CSS 4**   | Styling                      |
| **shadcn/ui**        | Accessible components        |
| **Yoopta Editor**    | Block-based rich text editor |
| **Dexie**            | IndexedDB wrapper            |
| **Zustand**          | Global state management      |
| **MiniSearch**       | Local full-text search       |
| **ULID**             | Time-sortable IDs            |
| **Motion**           | Animations                   |
| **Lucide**           | Icons                        |
| **Workbox**          | PWA + Service Workers        |
| **TanStack Virtual** | List virtualization          |

---

# 📂 Architecture

```txt
src/
├── components/
├── features/
│   ├── notes/
│   ├── editor/
│   ├── sidebar/
│   └── search/
├── db/
├── stores/
├── hooks/
├── routes/
└── lib/
```

---

# ⚡ Quick Start

## Install dependencies

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

---

# 📜 Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `pnpm dev`     | Development server   |
| `pnpm build`   | Production build     |
| `pnpm preview` | Production preview   |
| `pnpm test`    | Run tests            |
| `pnpm lint`    | Linting              |
| `pnpm format`  | Formatting           |
| `pnpm check`   | Lint + format        |
| `pnpm deploy`  | Deploy to Cloudflare |

---

# 🗺️ Roadmap

## Phase 0 — Setup

* [x] Setup TanStack Start
* [x] Configure Tailwind CSS
* [x] Configure shadcn/ui
* [ ] Create base layout
* [ ] Dark mode
* [ ] Folder structure

---

## Phase 1 — Local Database

* [ ] Configure Dexie
* [ ] Define notes schema
* [ ] Notes CRUD
* [ ] ULID IDs
* [ ] Local persistence

---

## Phase 2 — Notes UI

* [ ] Notes sidebar
* [ ] Create note
* [ ] Delete note
* [ ] Active note selection
* [ ] Date sorting

---

## Phase 3 — Editor

* [ ] Integrate Yoopta Editor
* [ ] Load content from IndexedDB
* [ ] Autosave
* [ ] Debounced writing
* [ ] Empty state

---

## Phase 4 — UX

* [ ] Keyboard shortcuts
* [ ] Cmd/Ctrl + K
* [ ] Cmd/Ctrl + N
* [ ] Smooth transitions
* [ ] Skeleton loaders
* [ ] Accessibility improvements

---

## Phase 5 — Search

* [ ] Integrate MiniSearch
* [ ] Notes indexing
* [ ] Instant search
* [ ] Search result highlighting

---

## Phase 6 — PWA

* [ ] Manifest
* [ ] Service Worker
* [ ] Offline caching
* [ ] Mobile installation
* [ ] Offline fallback

---

## Phase 7 — Performance

* [ ] Sidebar virtualization
* [ ] Lazy loading editor
* [ ] Optimize renders
* [ ] Optimize searches
* [ ] Optimize IndexedDB writes

---

## Phase 8 — Advanced Features

* [ ] Pinned notes
* [ ] Trash
* [ ] Archive
* [ ] Drag & drop
* [ ] Note history
* [ ] Export/import

---

## Phase 9 — Sync (future)

* [ ] Auth
* [ ] Multi-device sync
* [ ] Cloud backup
* [ ] Conflict resolution
* [ ] Realtime collaboration *(exploration)*

---

# 🎯 Philosophy

Arc Note follows a `local-first` architecture.

This means:

* The app works locally first
* Internet is optional
* Sync will be a future enhancement
* UX should never depend on the server
