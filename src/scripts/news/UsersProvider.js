let users = []
export const useUsers = () =>
  users.sort((c, n) => n.timestamp - c.timestamp).slice()

export const getUsers = () => {
  return fetch('http://localhost:8088/users')
    .then((response) => response.json())
    .then((parsedUsers) => {
      users = parsedUsers
    })
}
