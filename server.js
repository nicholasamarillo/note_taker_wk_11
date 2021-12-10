const express = require('express');

const apiRoutes = require('/note_taker_wk_11/routes/apiRoute');
const htmlRoutes = require('/note_taker_wk_11/routes/htmlRoute');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});