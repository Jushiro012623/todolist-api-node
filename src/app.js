const express = require('express');
const bootstrap = require('./bootstrap/bootstrap');
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
const app = express();
try {
    bootstrap(app)
    const PORT = process.env.APP_PORT || 5000;
    app.get('/', (req, res) => {
        res.send('Root')
    });
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error during initialization:', error);
    process.exit(1);
}