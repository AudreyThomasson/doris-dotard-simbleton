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
            // go through array and find the first business filter 
                const foundBusiness = foundBusinessArray.find(businessObj => {
                    // look at the business name and see if it includes any portion of business from search
                    const business = businessObj.companyName.includes(keyPressEvent.target.value)
            return business
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
    });