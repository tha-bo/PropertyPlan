<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoomStore } from '@/stores/room'
import { storeToRefs } from 'pinia'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const store = useRoomStore()
const { rooms, selectedRoom, currentImageIndex, house } = storeToRefs(store)

const carouselRef = ref()

const roomImages = computed(() => {
  const room = rooms.value.find((room) => room.id === selectedRoom.value)
  if (room) return room.images
  return house.value.images
})

const roomName = computed(() => {
  const room = rooms.value.find((room) => room.id === selectedRoom.value)
  return room ? room.name : house.value.name
})

watch(selectedRoom, () => {
  if (carouselRef.value) {
    carouselRef.value.carouselApi?.scrollTo(0)
  }
})

watch(currentImageIndex, (newIndex) => {
  if (carouselRef.value) {
    carouselRef.value.carouselApi?.scrollTo(newIndex)
  }
})
</script>

<template>
  <div v-if="roomImages && roomImages.length > 0" class="carousel-wrapper">
    <Carousel ref="carouselRef" class="w-full">
      <CarouselContent>
        <CarouselItem v-for="(image, index) in roomImages" :key="index">
          <div class="flex items-center justify-center">
            <img
              :src="image"
              :alt="`${roomName} - Image ${index + 1}`"
              class="w-full h-auto rounded-lg object-cover aspect-video"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious v-if="roomImages.length > 1" class="left-0" />
      <CarouselNext v-if="roomImages.length > 1" class="right-0" />
    </Carousel>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  margin-bottom: 24px;
  width: 100%;
}
</style>
