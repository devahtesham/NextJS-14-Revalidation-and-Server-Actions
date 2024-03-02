export async function fetchAllProducts() {
    const response = await fetch('http://localhost:3000/api/products', {
        // next: {
        //     // =======>>> time based revalidation
        //      revalidate:10,

        //     // =======>>> fetch by default cache request, by applying the below property it send request to server every time and got the latest data not cached one 
        //     cache: "no-store"


        // }
    });
    const data = await response.json();
    return data.data
}

export async function addProduct(body) {
    const response = await fetch('http://localhost:3000/api/products', {
        method: "POST",
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data
}

