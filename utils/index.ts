export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'bd2b2e06admsh6b17d13785352dap16b711jsn6140ed827a74',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const responce = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,{
        headers:headers
    })

    const result = await responce.json()
    return result
}