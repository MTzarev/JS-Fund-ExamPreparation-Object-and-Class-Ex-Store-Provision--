function storeProvision(curStock, orderedStock) {

    for (let i = 0; i < orderedStock.length; i += 2) {
        let curProduct = orderedStock[i];
        let qty = +orderedStock[i + 1];
        if (!curStock.includes(curProduct)) {
            curStock.push(curProduct);
            curStock.push(qty);
        } else {
            let idx = curStock.indexOf(curProduct) + 1;
            curStock[idx] = Number(curStock[idx]) + qty;
        }
    }

    for (let i = 0; i < curStock.length; i += 2) {
        let finalProduct = curStock[i];
        let quantity = Number(curStock[i + 1]);
        console.log(`${finalProduct} -> ${quantity}`);
    }
}
storeProvision(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);