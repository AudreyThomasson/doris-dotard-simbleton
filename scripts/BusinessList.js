import { useBusinesses, useNewYorkBusinesses } from "./BusinessProvider.js"
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

const newYorkTarget = document.querySelector(".businessList--newYork")

export const newYorkBusinessList = () => {
    // for this array below, use data from the BusinessProvider
    const newYorkBusinessArray = useNewYorkBusinesses()
    newYorkTarget.innerHTML = "<h1>New York Businesses</h1>"

    newYorkBusinessArray.forEach(
        (businessObject) => {
            newYorkTarget.innerHTML += Business(businessObject)
        }
    );

}

// --------------------code for search below here---------------------

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")



const foundBusinessArray = useBusinesses()
document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {

            if (businessObject.companyName.includes(keyPressEvent.target.value)) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

                const foundBusiness = businessObj.find(business => {
            return businessObj
            })

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    }});