export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '2a3968b52dmsh114a4e95344f59fp1f56cbjsnf1e51870e8d3',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    // Base rental price (in dollars)
    const basePrice = 50;
    
    // Calculate age factor - newer cars cost more
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - year;
    const ageFactor = Math.max(0.7, 1 - (carAge * 0.05)); // Reduces by 5% per year, but never below 70% of base
    
    // Calculate efficiency factor - more fuel efficient cars (higher mpg) cost more
    const efficiencyFactor = 1 + (city_mpg / 100);
    
    // Premium for very new cars (current or last year models)
    const newCarPremium = carAge <= 1 ? 1.2 : 1;
    
    // Premium for very fuel efficient cars
    const highEfficiencyPremium = city_mpg >= 35 ? 1.15 : 1;
    
    // Calculate final daily rate
    const dailyRate = basePrice * ageFactor * efficiencyFactor * newCarPremium * highEfficiencyPremium;
    
    // Return as whole dollar amount (no cents)
    return Math.round(dailyRate).toString();
  };