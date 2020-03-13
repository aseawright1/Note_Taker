// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var notesData = require("../db/db");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link they are shown a JSON of the data in the table
    // ---------------------------------------------------------------------------

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    // app.post("/api/notes", function(req, res) {
    //     const note = req.body
    //     Node.id = 
    // });



    // extra code to clear out the table while working with the functionality

    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = 0;
    //     waitListData.length = 0;

    //     res.json({ ok: true });
    //   });

};