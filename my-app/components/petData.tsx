export type PetData = {
	name: string
	img: string
	type: string
	breed: string
	description: string
	age: string
	inoculations: string[]
	diseases: string[]
	parasites: string[]
}

export async function fetchPetData(): Promise<PetData[]> {
	const response = await fetch(
		'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/shelter/pets.json'
	)
	if (!response.ok) {
		throw new Error('Failed to fetch pet data')
	}

	const originalPetData: PetData[] = await response.json()

	const extendedPetData: PetData[] = []
	for (let i = 0; i < 5; i++) {
		extendedPetData.push(...originalPetData)
	}

	return extendedPetData
}
