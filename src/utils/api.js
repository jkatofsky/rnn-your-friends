let API_URL;
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    API_URL = "http://localhost:8000";
} else {
    API_URL = ""; //TODO: get the prod API URL
}


export default async function postJSON(endpoint, data) {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.log(err);
        return null;
    }
}

postJSON('train', { training_strings: ['foo', 'bar', 'baz'] });