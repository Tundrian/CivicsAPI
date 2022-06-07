const fetchData = async () => {
    const res = await fetch('http://localhost:8000/api/environment')
    const data = await res.json()
    console.log('data: ', data)
}
document.querySelector('button').addEventListener('click', fetchData)
