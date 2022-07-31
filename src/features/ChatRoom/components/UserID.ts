export function useName() {
    let nick = localStorage.getItem('user')
    if (nick) return nick
    throw new Error('missing nickname')
}
