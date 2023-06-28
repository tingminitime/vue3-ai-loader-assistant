export function fetchChat(message, history) {
  console.log('[fetchChat] history', history)

  return fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, history }),
  })
}
