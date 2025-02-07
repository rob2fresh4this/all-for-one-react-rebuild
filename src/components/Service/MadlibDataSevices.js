export async function generateMadLib(data) {
    const apiUrl = `https://allforone2-asadawb9axdvc9a9.westus-01.azurewebsites.net/MadLib/MadLib?` +
        `animal1=${data.animal}&container1=${data.container1}&leastFavColor=${data.leastFavColor}` +
        `&bodyCovering=${data.bodyCovering}&verb1=${data.verb1}&favoriteThing=${data.favoriteThing}` +
        `&favoriteFood=${data.favoriteFood}&activityToDo=${data.activityToDo}` +
        `&changeAppearance=${data.changeAppearance}&favColor=${data.favColor}`;
    const response = await fetch(apiUrl);
    const result = await response.text();
    return result;
}