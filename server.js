const app = require('./src/config/config');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});