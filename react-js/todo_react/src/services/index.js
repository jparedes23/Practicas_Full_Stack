     const url = "https://6363105e66f75177ea3c934e.mockapi.io/tareas"
const urlUsers = "https://6363105e66f75177ea3c934e.mockapi.io/user";
const urlBooks="https://www.googleapis.com/books/v1/volumes?q="


export const getBooks = async (search) => {
    try {
      const response = await fetch(`${urlBooks}${search}&maxResults=20`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };




export const getProfile = async () => {
    try {
      const response = await fetch("https://api.github.com/users/jparedes23");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error", error);
    }
  };




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

////Methodo para obtener por id del mockapi

export const getById = async (id)=> {
    try {
        const response = await fetch (url + "/"+id)
        console.log(response)
        if (response.ok) {
            const data = await response.json();
            return data
        }else{
            return null
        }
    } catch (error) {
        console.log(error)
        return null
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


export const postUser = async (user) => {
	try {
		const response = await fetch(urlUsers, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getUsers = async () => {
	try {
		const response = await fetch(urlUsers);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};




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