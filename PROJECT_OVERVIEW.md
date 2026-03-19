# Property Plan Project Overview

## Project Description

A Vue 3 + TypeScript interactive property floor plan viewer with room selection, image carousels, and detailed descriptions.

## AI

AI was used to document and develop the application. Project was manually set up with vue3+vite, tailwind and shadcdn. 
Built component by component with AI assistance in error correction and optimization

## Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Routing**: Vue Router 5
- **State Management**: Pinia
- **Styling**: Tailwind CSS 4 + shadcn-vue components
- **Icons**: lucide-vue-next
- **Build Tool**: Vite

## Project Structure

```
src/
├── App.vue                    # Main layout (sidebar + content pane)
├── main.ts                    # Entry point
├── router/
│   └── index.ts              # Route config with root path "/" and "/room/:roomId"
├── stores/
│   └── room.ts               # Pinia store - room selection state + data
├── components/
│   ├── FloorPlan.vue         # Interactive SVG floor plan with room selection
│   ├── ImageCarousel.vue     # shadcn carousel showing room images
│   ├── HouseDescription.vue  # shadcn card showing room/house details
│   └── ui/                   # shadcn-vue components
│       ├── carousel/         # Carousel component
│       ├── card/             # Card component
│       └── button/           # Button component
├── views/
│   └── HomeView.vue          # Main page view (carousel + description)
├── stores/
│   └── room.ts               # Pinia store with rooms data
└── lib/
    └── utils.ts              # Utility functions
```

## Key Features Implemented

### 1. Interactive Floor Plan

- Located in sidebar (`FloorPlan.vue`)
- SVG-based interactive layout
- Click rooms to select them
- Highlights selected room

### 2. Image Carousel

- Uses shadcn-vue carousel component
- Displays room images with navigation arrows
- Auto-resets to first image when room changes (via watcher)
- Only shows nav buttons for multiple images

### 3. Room Description

- shadcn Card component with room/house details
- Shows below carousel in main content
- Updates when room selection changes

### 4. Client-Side Routing

- Routes: `/` (home) and `/room/:roomId` (specific room)
- Route ↔ Store sync via watchers
- URL changes when room selected, room selection when URL changes
- Home icon in nav header links back to `/`

### 5. State Management (Pinia Store)

Located in `src/stores/room.ts`:

- `rooms[]` - Array of 6 rooms with images, descriptions, coordinates
- `house` - House details with images
- `selectedRoom` - Current selected room ID
- `selectRoom(roomId)` - Action to update selected room

## Layout Structure

### App.vue (Main)

```
.app-shell
├── .nav-pane (left sidebar)
│   ├── .nav-header
│   │   └── RouterLink to "/" with Home icon
│   └── .nav-content
│       └── FloorPlan
└── .content-pane (main area)
    └── RouterView (displays HomeView)
```

### HomeView.vue

```
.home (centered flex container)
├── ImageCarousel
└── HouseDescription
```

## Important Styling Notes

- Uses Tailwind CSS utility classes (`w-full`, `h-auto`, `aspect-video`, etc.)
- `max-width: 72ch` is for optimal text readability (readability unit = character width)
- `ch` unit = width of "0" character in current font
- Sidebar background: `var(--color-sidebar)`
- Content pane uses CSS Grid layout

## UI Components Used (shadcn-vue)

- **Carousel**: Auto-rotates through images with next/prev buttons
- **Card**: Room description container (CardHeader, CardTitle, CardContent)
- **Button**: Used internally by carousel
- Icons from lucide-vue-next (Home icon in nav)

## Current Integration Points

1. **FloorPlan → Store**: Calls `store.selectRoom(roomId)` on click
2. **HomeView → Router/Store**: Watchers sync route params with store state
3. **ImageCarousel → Store**: Reads `selectedRoom` to fetch images, resets on change
4. **HouseDescription → Store**: Reads room/house details based on `selectedRoom`

## File Paths to Key Files

- Routes: `src/router/index.ts`
- Store: `src/stores/room.ts`
- Carousel: `src/components/ImageCarousel.vue`
- Layout: `src/App.vue`
- Page: `src/views/HomeView.vue`
- Styles: `src/assets/main.css` (Tailwind + CSS vars)

## Next Steps / Future Improvements

- Update Overview with new components
- Add animations for room transitions
- Add filters or search for rooms
- Ignore linting /ui directory or resolve issues
- add selenium tests

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run type-check` - Type check with TypeScript
- `npx shadcn-vue@latest add <component>` - Add new shadcn component
