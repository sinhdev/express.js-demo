var express = require('express');
const app = express();

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: [
            {
                id: 1,
                title: "lunch",
                description: "Go for lunc by 2pm"
            },
            {
                id: 2,
                title: "learn",
                description: "Go to class at 6pm"
            }
        ]
    })
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});