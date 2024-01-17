const express = require('express');
const { mean, median, mode, numArray } = require('./calculations');
const ExpressError = require('./expressError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    return res.send("Homepage");
});


app.get('/mean', function(req, res) {
    let nums = numArray(req.query.nums);
    if(!nums) {
        throw new ExpressError('Empty query string');
    }
    let mean_result = mean(nums);
    return res.json({operation: "mean", value: `${mean_result}`});
});


app.get('/median', function(req, res) {
    let nums = numArray(req.query.nums);
    if(!nums) {
        throw new ExpressError('Empty query string');
    }
    let median_result = median(nums);
    return res.json({operation: "median", value: `${median_result}`});
});


app.get('/mode', function(req, res) {
    let nums = numArray(req.query.nums);
    if(!nums) {
        throw new ExpressError("Empty query string");
    }
    let mode_result = mode(nums);
    return res.json({operation: "mode", value: `${mode_result}`});
});


app.listen(3000, function() {
    console.log('Server starting on port 3000.')
});