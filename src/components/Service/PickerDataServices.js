export async function getRestaurant(picked) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/RestaurantPicker/pickRestaurant/${picked}`);
    const data = await response.text();
    console.log(data);
    return data;
}