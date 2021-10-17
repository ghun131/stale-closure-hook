export async function getData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
    const index = Math.floor(Math.random() * 90)
    return result.slice(index, index + 10)
}