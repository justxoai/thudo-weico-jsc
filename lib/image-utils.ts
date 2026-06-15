const AVAILABLE_IMAGES = [
  "/green-office-building.jpg",
  "/drainage-system.jpg",
  "/water-infrastructure-system.jpg",
  "/ecological-park.jpg",
  "/industrial-park.jpg",
  "/bridge-infrastructure.jpg",
  "/urban-planning-development.jpg",
  "/wastewater-treatment-plant.jpg",
]

// Create a seeded random number generator for consistent image assignment per project ID
const getSeededRandom = (seed: number): number => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export const getRandomImageForProject = (projectId: number): string => {
  // Use project ID as seed to ensure same image is always used for same project
  const randomIndex = Math.floor(getSeededRandom(projectId) * AVAILABLE_IMAGES.length)
  return AVAILABLE_IMAGES[randomIndex]
}
