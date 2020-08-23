export const Agent = (agentObject) => {
    return `
        <section class="agent">
            <h3 class="agent__name">${agentObject.fullName}</h3>
            <p>${agentObject.company}</p>
            <p>${agentObject.phoneNumber}</p>
            <hr>
        </section>
    `
}