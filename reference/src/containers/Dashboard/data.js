const getGroupedData = (data, role) => {
    const getStatus = (a, b, c) => (a <= (b + c)) ? {text: "OK", style: "green"} : {text: "Insufficient", style: "red"};
    const getCategory = n => n ? {text : "Y", style: "green"} : {text: "N", style:"red"};
    const getQuantity = q => [q.qty, q.unit].join(" ")
    const newData = {};
    Object.keys(data).forEach(item => {
        item = data[item];
        let t = {};
        let group = item.group;
        t.id = item.id;
        t.name = item.name;
        t.required_quantity =  getQuantity(item.required_quantity);
        if (role === "manager") {
            t.vendor_1 = getQuantity(item.vendor_1);
            t.vendor_2 = getQuantity(item.vendor_2);
        }
        
        t.recieved_quantity = [item.vendor_1.qty + item.vendor_2.qty, item.required_quantity.unit].join(" ");
        t.status = getStatus(item.required_quantity.qty, item.vendor_1.qty, item.vendor_2.qty);
        
        if (role === "manager") {
            Object.keys(item.category).forEach(cat => {
                t[cat] = getCategory(item.category[cat]);
            });
        }
        

        if (role === "manager") {
            if (typeof newData[group] === "undefined") {
                newData[group] = [];
            }
            newData[group].push({name : group, data : t});
        } else {
            if (item.category[role] === 1) {
                if (typeof newData[group] === "undefined") {
                    newData[group] = [];
                }
                newData[group].push({name : group, data : t});
            }
        }
       
    });
    return newData;
}

export {getGroupedData};


