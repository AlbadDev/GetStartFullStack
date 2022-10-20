const express = require('express')
const dotenv = require('dotenv')
const port = process.env.PORT || 5000


const app = express()
const projects = [
    {
        name: 'Pokedex',
        id: 1
    },
    {
        name: 'Portfolio v1',
        id: 2
    },
    {
        name: 'Github_Viewer',
        id: 3
    },
]
app.get('/api/projects', (req, res) => {
    res.status(200).json(projects)
})



app.listen(port, () => {
    console.log(`Server running sucessful on port ${port}...`)
})