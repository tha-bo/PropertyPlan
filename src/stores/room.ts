import { defineStore } from 'pinia'

export const useRoomStore = defineStore('room', {
  state: () => ({
    rooms: [
      {
        id: 'kitchen',
        kind: 'rect',
        x: 63,
        y: 402,
        width: 159,
        height: 182,
        name: 'Kitchen',
        description:
          'A well-appointed kitchen featuring ample counter space and modern finishes. Thoughtfully laid out for both everyday cooking and entertaining, with generous storage and natural light flowing in from the adjoining living area.',
        images: [
          getAssetUrl('../assets/house/kitchen1.jpg'),
          getAssetUrl('../assets/house/kitchen2.jpg'),
        ],
      },
      {
        id: 'hallway',
        kind: 'rect',
        x: 75,
        y: 285,
        width: 149,
        height: 109,
        name: 'Hallway',
        description:
          'A welcoming entrance hallway that sets the tone for the rest of the home. Wide enough to feel open and uncluttered, with easy access to all main living areas.',
        images: [getAssetUrl('../assets/house/hallway1.jpg')],
      },
      {
        id: 'bathroom',
        kind: 'rect',
        x: 75,
        y: 41,
        width: 148,
        height: 229,
        name: 'Bathroom',
        description:
          'A spacious full bathroom with clean, modern finishes. Features a full bath and shower, quality fittings, and excellent ventilation — a calm, private retreat to start and end your day.',
        images: [
          getAssetUrl('../assets/house/bathroom1.jpg'),
          getAssetUrl('../assets/house/bathroom2.jpg'),
        ],
      },
      {
        id: 'bedroom',
        kind: 'rect',
        x: 232,
        y: 40,
        width: 427,
        height: 225,
        name: 'Master Bedroom',
        description:
          'A generously sized master bedroom with room for a king bed and full suite of furniture. Enjoys direct access to the balcony, filling the space with natural light and fresh air. A true sanctuary at the end of the day.',
        images: [
          getAssetUrl('../assets/house/bedroom1.jpg'),
          getAssetUrl('../assets/house/bedroom3.jpg'),
          getAssetUrl('../assets/house/bedroom4.jpg'),
        ],
      },
      {
        id: 'balcony',
        kind: 'rect',
        x: 666,
        y: 40,
        width: 102,
        height: 225,
        name: 'Balcony',
        description:
          'A private balcony accessible from the master bedroom — perfect for morning coffee or winding down in the evening. Enjoy open-air living with views over the surrounding neighbourhood.',
        images: [getAssetUrl('../assets/house/balcony1.jpg')],
      },
      {
        id: 'livingRoom',
        kind: 'rect',
        x: 231,
        y: 285,
        width: 537,
        height: 299,
        name: 'Living Room',
        description:
          'The heart of the home. This expansive open-plan living room offers exceptional space for relaxing, dining, and entertaining. Flooded with natural light and connected to the kitchen, it creates a seamless flow that makes every gathering feel effortless.',
        images: [
          getAssetUrl('../assets/house/livingroom1.jpg'),
          getAssetUrl('../assets/house/livingroom2.jpg'),
          getAssetUrl('../assets/house/livingroom3.jpg'),
          getAssetUrl('../assets/house/livingroom4.jpg'),
        ],
      },
    ],
    house: {
      images: [
        getAssetUrl('../assets/house/surrounds2.jpg'),
        getAssetUrl('../assets/house/surrounds1.jpg'),
      ],
      plan: getAssetUrl('../assets/plan_clean.jpg'),
      viewBox: '0 0 800 624',
      name: 'Beautiful Home',
      description:
        'This charming home offers a perfect blend of comfort and style. With spacious living areas, a modern kitchen, and a private balcony, it’s designed for both everyday living and entertaining. Located in a friendly neighborhood, it’s the ideal place to create lasting memories.',
      email: 'info@testpropertyplan.com',
      phone: '(123) 456-7890',
    },
    selectedRoom: null as string | null,
    currentImageIndex: 0,
  }),
  getters: {},
  actions: {
    selectRoom(roomId: string | null) {
      this.selectedRoom = roomId
      this.currentImageIndex = 0
    },
    setImageIndex(index: number) {
      this.currentImageIndex = index
    },
  },
})

function getAssetUrl(path: string) {
  return new URL(`${path}`, import.meta.url).href
}
