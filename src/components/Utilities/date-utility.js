import moment from "moment";

export const dateFormatter = (date) => {
    const formattedDate = moment(date).format("Do MMM, yyyy");
    return formattedDate;
}