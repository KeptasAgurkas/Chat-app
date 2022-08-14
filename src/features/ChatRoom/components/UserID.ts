export function useName() {
    const nick = localStorage.getItem('user')

    if (nick) return nick
    throw new Error('missing nickname')
    console.log(nick)
}
