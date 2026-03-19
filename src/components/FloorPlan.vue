<script setup lang="ts">
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'
import { useSidebar } from '@/components/ui/sidebar'

const store = useRoomStore()
const { house, rooms, selectedRoom } = storeToRefs(store)
const { isMobile, setOpenMobile } = useSidebar()

function selectRoom(roomId: string) {
  store.selectRoom(roomId)
  if (isMobile.value) {
    setOpenMobile(false)
  }
}
</script>

<template>
  <div v-if="house" class="floorplan-container">
    <img class="plan" :src="house.plan" alt="plan" />

    <svg class="overlay" :viewBox="house.viewBox" xmlns="http://www.w3.org/2000/svg">
      <rect
        v-for="room in rooms"
        :key="room.id"
        class="room-shape"
        :class="{ selected: selectedRoom === room.id }"
        :data-room="room.id"
        :x="room.x"
        :y="room.y"
        :width="room.width"
        :height="room.height"
        @click="selectRoom(room.id)"
      />
    </svg>
  </div>
</template>

<style scoped>
.floorplan-container {
  position: relative;
  display: inline-block; /* shrink-wraps to image size */
}

.floorplan-container img {
  display: block;
  width: 100%;
}

.floorplan-container svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.room-shape {
  fill: transparent;
  stroke: transparent;
  cursor: pointer;
  transition: fill 0.2s ease;
}

.room-shape:hover {
  fill: rgba(176, 81, 44, 0.25);
  stroke: rgba(176, 81, 44, 0.8);
  stroke-width: 2;
}

.room-shape.selected {
  fill: rgba(176, 81, 44, 0.4);
  stroke: rgba(176, 81, 44, 1);
  stroke-width: 2;
}
</style>
