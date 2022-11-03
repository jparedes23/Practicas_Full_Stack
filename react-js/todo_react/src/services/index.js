const url = "https://6363105e66f75177ea3c934e.mockapi.io/tareas"

// methodo para listar

export const get = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

/// metodo para crear
export const post = async (body) => {
    try {
        const response = await fetch (url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

//para Actualizar 

export const update = async (id, body) => {
    try {
        const response = await fetch (`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}