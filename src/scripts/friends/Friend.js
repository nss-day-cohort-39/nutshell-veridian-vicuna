/*
    Friend HTML
    Creates an HTML representation of a single friend

    Authors: Heidi Sprouse
*/

export const Friend = (friendObject) => {
    return `
    <h3>
        ${friendObject.username}
    </h3>`
}