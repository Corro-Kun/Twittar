const API = "http://192.168.20.24:3000/post"

export const GetPost = async() => {
    const list = await fetch(API)
    return await list.json()
}

export const SetPost = async (NewPublication) => {
    const res = await fetch(API, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(NewPublication)
    });
    return await res.json();
}