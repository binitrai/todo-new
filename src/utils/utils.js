const cn = (...args) => args.join(" ");
const getStatus = (num) => {
    const status = ["Pending", "In Progress", "Done"];
    if (typeof num === "undefined") {
        return status;
    }
    return status[num];
}
export {
    cn,
    getStatus
} 