import { useAgents } from "./BusinessProvider.js"
import { Agent } from "./Agent.js"

// making a simple name for the place where we want the 
// business info inserted in the html
const contentTarget = document.querySelector(".agents")

export const AgentList = () => {
    // for this array below, use data from the BusinessProvider
    const agentArray = useAgents()
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Agent(businessObject)
        }
    );

}