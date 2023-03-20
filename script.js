let message = document.getElementById("joke")
const btn = document.getElementById("btn")
const apiKey = "Jq5j2BtAuvE5aUo0kikjlw==Egiu4fo8GnW9buk1";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

async function joker(){
    try {message.innerHTML = "Here it comes..."
    btn.disabled = true
    btn.innerHTML = "Loading..."

    let response = await fetch(apiUrl, options)
    const data = await response.json()

    btn.disabled = false
    btn.innerHTML = "Tell me a joke."

    message.innerHTML = data[0].joke}

    catch (error) {
        message.innerHTML = "An error occured, try again"
        btn.disabled = false
        btn.innerHTML = "Tell me a joke."
    }
}

btn.addEventListener("click", joker)