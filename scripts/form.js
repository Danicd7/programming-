const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avg_rating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avg_rating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avg_rating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avg_rating: 5.0
    }
];

function getProducts(products) {
    let select = document.querySelector("#ProductName");
    select.innerHTML = "";

    let placeHolderOption = document.createElement("option");
    placeHolderOption.text = "select a product...";
    placeHolderOption.disabled = true;
    placeHolderOption.selected = true;
    placeHolderOption.value = "";
    select.appendChild(placeHolderOption);

    for (let i = 0; i < products.length; i++) {
        placeHolderOption = document.createElement("option");
        placeHolderOption.text = products[i].name;
        placeHolderOption.value = products[i].id;
        select.appendChild(placeHolderOption);
    }
}

getProducts(products);