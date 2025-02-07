export async function sayHello(name) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/SayHello/SayHelloTo?name=${name}`);
    const data = await response.text();
    return data;
}