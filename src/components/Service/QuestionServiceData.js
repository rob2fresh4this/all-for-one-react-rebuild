export async function askQuestion(name, time) {
    const response = await fetch(`https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/AskingQuestions/SetReply/${name}/${time}`);
    const data = await response.text();
    console.log(data);
    return data;
}