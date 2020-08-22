import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

// making a simple name for the place where we want the 
// business info inserted in the html
const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    // for this array below, use data from the BusinessProvider
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );

}