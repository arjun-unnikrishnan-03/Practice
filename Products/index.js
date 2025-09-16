let products = [];

async function getProducts() {
    let res = await fetch("https://dummyjson.com/products");
    return await res.json();
}

var swapProducts = async (index1,index2) => {
    [products[index1], products[index2]] = [products[index2], products[index1]];
    return products;
}

var deletedProduct = async (name) => {
    return products.filter((product) => product.title !== name);
}

var editProductTitle = async (index) => {
    products[index].title = "Laptop";
}

async function main() {
    try {
        const data = await getProducts();

        products = data.products.slice(0, 10);
        console.log("Product Titles:");
        console.log(products.map((product) => product.title));

        products = await swapProducts(0,1);
        console.log("Products after swapping:");
        console.log(products.map((product) => product.title));

        products = await deletedProduct("Powder Canister");
        console.log("Products after deleting Powder Canister:");
        console.log(products.map((product) => product.title));

        await editProductTitle(4);
        console.log("Products after editing index 4:");
        console.log(products.map((product) => product.title));

    } catch (error) {
        console.log(error);
    }
}

main();
