const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".")

// button to click and add a friend
<button id="addChatFriend"></button>

// event listener that calls "add friend" on button click
contentTarget.addEventListener("AddNewFriend", click => {
    if (clickEvent.target.id === "#addChatFriend") {
            const addNewFriendEvent = new CustomEvent("AddNewFriend", {
                detail: {
                    friendName: document.querySelector("#newFriendName").value
                }
            })
            eventHub.dispatchEvent(addNewFriendEvent)
    }

})


