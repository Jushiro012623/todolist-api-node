const express = require('express');
const bootstrap = require('./bootstrap/bootstrap');
const app = express();
try {
    bootstrap(app)
    const PORT = process.env.APP_PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Error during initialization:', error);
    process.exit(1);
}