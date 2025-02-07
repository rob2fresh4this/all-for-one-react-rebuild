export async function ReverseItNum(input) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/ReverseItNumbersOnly/AddReverseItNumbersOnly/${input}`);
    const data = await response.text();
    console.log(data);
    return data;
}