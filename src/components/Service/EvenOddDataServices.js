export async function isOddOrEven(num1) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/OddOrEven/AddOddOrEven/${num1}`);
    const data = await response.text();
    console.log(data);
    return data;
}