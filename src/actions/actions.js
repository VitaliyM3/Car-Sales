export const addItem = item => {
    return {
        type: "BUY_ITEM",
        payload: {id: item.id, name: item.name, price: item.price}
    };
};

export const removeFeature = item => {
    return {
        type: "REMOVE_FEATURE",
        payload: {id: item.id, price: item.price}
    };
};