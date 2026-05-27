# Minimal Notes — Architecture

This project uses a **Screaming Architecture + Feature Modules** style architecture.

The idea is that the code structure directly reflects the product domain.

---

# 🧠 Principles

* Local-first (IndexedDB as source of truth)
* Feature-based modules (not UI-driven structure)
* Separation of concerns by domain
* Scalable toward future sync
* Offline-first PWA

---

# 📁 Project structure

```txt
src/
├── assets/
├── modules/
│   ├── core/             # system base (UI, utils, shared logic)
│   ├── notes/            # main domain: notes
│   ├── editor/           # Yoopta editor integration
│   ├── search/           # MiniSearch full-text search
│   ├── database/         # Dexie + IndexedDB layer
│   ├── pwa/              # service workers + installability
│   ├── ui-shell/         # global layout (sidebar, header)
│   ├── settings/         # user settings
│   ├── tags/             # tagging system
│   ├── folders/          # hierarchical organization
│   └── sync/             # (future) multi-device sync
│
├── routes/               # TanStack Start routing
└── shared/               # global utilities not tied to a domain
```
