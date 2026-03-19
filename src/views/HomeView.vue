<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'
import ImageCarousel from '@/components/ImageCarousel.vue'
import HouseDescription from '@/components/HouseDescription.vue'
import RoomGallery from '@/components/RoomGallery.vue'

const route = useRoute()
const router = useRouter()
const store = useRoomStore()
const { selectedRoom, house } = storeToRefs(store)

// When roomId from route changes, update the store
watch(
  () => route.params.roomId,
  (roomId) => {
    if (roomId) {
      store.selectRoom(roomId as string)
    } else store.selectRoom(null)
  },
  { immediate: true },
)

// When room is selected in store, update the route
watch(selectedRoom, (newRoomId) => {
  if (newRoomId && route.params.roomId !== newRoomId) {
    router.push({ name: 'room', params: { roomId: newRoomId } })
  } else router.push({ name: 'home' })
})
</script>

<template>
  <section class="home">
    <HouseDescription />
    <RoomGallery class="pt-12" />
    <ImageCarousel class="pt-12" />
    <div class="pt-12"></div>
    <p>For more information or to schedule a viewing, please contact us at:</p>
    <p>Phone: {{ house.phone }}</p>
    <p>Email: {{ house.email }}</p>
  </section>
</template>

<style scoped>
.home {
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}

.title {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 650;
  letter-spacing: -0.02em;
}

.subtitle {
  margin-top: 8px;
  color: color-mix(in oklch, var(--color-foreground), transparent 35%);
}
</style>
