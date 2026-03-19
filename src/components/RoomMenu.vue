<script setup lang="ts">
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'
import { useSidebar } from '@/components/ui/sidebar'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'

const store = useRoomStore()
const { rooms, selectedRoom } = storeToRefs(store)
const { isMobile, setOpenMobile } = useSidebar()

function selectRoom(roomId: string | null) {
  store.selectRoom(roomId)
  if (isMobile.value) {
    setOpenMobile(false)
  }
}
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Rooms</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton :is-active="selectedRoom == null" @click="selectRoom(null)">
            Home
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem v-for="room in rooms" :key="room.id">
          <SidebarMenuButton :is-active="selectedRoom === room.id" @click="selectRoom(room.id)">
            {{ room.name }}
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>
