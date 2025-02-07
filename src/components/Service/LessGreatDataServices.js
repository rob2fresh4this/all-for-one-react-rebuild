export async function geaterOrLess(input, input2) {
    const response = await fetch(`https://minichallengetwotofour-endpoints.azurewebsites.net/LessThenGreaterThen/lessThenGreaterThen/${input}/${input2}`);
    const data = await response.text();
    console.log(data);
    return data;
}