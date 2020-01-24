export const getRole = (email) => {
    const collection = {
        "manager@dynaeats.com" : {name : "Manager", role : "manager"},
        "italian@dynaeats.com" : {name : "Italian Chef", role : "italian"},
        "indian@dynaeats.com" : {name : "Indian Chef", role : "indian"},
        "bakery@dynaeats.com" : {name : "Bakery Chef", role : "bakery"}
    }
    return collection[email];
}