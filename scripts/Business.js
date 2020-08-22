export const Business = (businessObject) => {
    return `
        <section class="business">
            <h3 class="business__name">${businessObject.companyName}</h3>
            <p>${businessObject.addressFullStreet}</p>
            <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
            <hr>
        </section>
    `
}