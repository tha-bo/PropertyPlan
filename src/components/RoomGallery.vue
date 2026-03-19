<script setup lang="ts">
import { computed } from 'vue'
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'

const store = useRoomStore()
const { rooms, selectedRoom } = storeToRefs(store)

const roomDetails = computed(() => {
  return rooms.value.find((room) => room.id === selectedRoom.value)
})

function selectImage(index: number) {
  store.setImageIndex(index)
}
</script>

<template>
  <div v-if="roomDetails?.images?.length" class="gallery">
    <div class="gallery-grid">
      <div
        v-for="(image, index) in roomDetails.images"
        :key="index"
        class="gallery-item"
        @click="selectImage(index)"
      >
        <img :src="image" :alt="`${roomDetails.name} - Image ${index + 1}`" class="gallery-image" />
        <div class="gallery-badge">{{ index + 1 }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  width: 100%;
}

.gallery-grid {
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex-wrap: wrap;
}

.gallery-item {
  position: relative;
  width: 80px;
  height: 80px;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 2px solid transparent;
  flex-shrink: 0;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: var(--highlight);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
