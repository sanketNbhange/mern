import { API } from "../../backend";

export const createOrder = (userId, token, orderData) => {
    return fetch(`${API}/order/create/${userId}`, {
        method:"POST",
        headers: {
            Application:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: orderData})
    }).then(reponse => {
        return response.json()
    }).catch(err => console.log(err)
    )
}