
export async function addTwoNumbers(num1, num2) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AddingTwoNumbers/addNumbers/${num1}/${num2}`);
    const data = await response.text();
    console.log(data);
    return data;
}

