<script setup lang="ts">
import { computed } from 'vue'
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'

const store = useRoomStore()

const { rooms, selectedRoom, house } = storeToRefs(store)

const roomDetails = computed(() => {
  if (selectedRoom.value) {
    return rooms.value.find((room) => room.id === selectedRoom.value)
  }
  return house.value
})
</script>

<template>
  <div v-if="roomDetails" class="description">
    <h2>{{ roomDetails.name }}</h2>
    <p>{{ roomDetails.description }}</p>
  </div>
</template>

<style scoped>
.description {
  margin-top: 24px;
  padding: 0;
}
</style>
