<script setup lang="ts">
import { Home } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import FloorPlan from './components/FloorPlan.vue'
import RoomMenu from './components/RoomMenu.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarInset,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <div class="flex h-screen w-full">
      <Sidebar>
        <SidebarHeader>
          <RouterLink to="/" class="flex items-center gap-2 text-lg font-semibold">
            <Home class="h-5 w-5" />
            <span>Your Beautiful Home</span>
          </RouterLink>
        </SidebarHeader>
        <SidebarContent class="pr-4">
          <SidebarGroup>
            <SidebarGroupLabel>Interactive floor plan</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <FloorPlan />
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <RoomMenu />
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <header class="flex items-center justify-between border-b border-sidebar-border px-4 py-3">
          <SidebarTrigger />
          <ThemeToggle />
        </header>
        <main class="content-pane flex-1 overflow-auto">
          <RouterView />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
</template>

<style scoped>
.content-pane {
  padding: 24px;
}
</style>
