export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <p>${businessObject.addressFullStreet}</p>
            <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
            <br>
        </section>
    `
}