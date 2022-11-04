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

// export const getProfile = async () => {
//     try {
//         const response = fetch ("https://api.github.com/users/jparedes23")
//         const data = await response.json();
//     } catch (error) {
        
//     }
// }


/// para eliminar un registro

export const destroy = async (id)=>{
    try {
        const response = await fetch (`${url}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })

        const data  = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
    }
}