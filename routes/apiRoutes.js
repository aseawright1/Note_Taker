// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var notesData = require("../db/db.json")
var fs = require('fs')

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link they are shown a JSON of the data in the table
    // ---------------------------------------------------------------------------

    app.get("/api/notes", function(req, res) {
        res.json(notesData); //or res.sendFile(path.join(__dirname, '../db/db.json'))
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/notes", function(req, res) {
        var note = req.body
        note.id = notesData.length
        notesData.push(note)
        fs.writeFileSync('../db/db.json', JSON.stringify(notesData), function() {
            console.log('Note saved to database')
        })
        res.json(notesData)
    });

    // API DELETE Requests
    // Below code handles when a user removes data from the server
    // ---------------------------------------------------------------------------

    app.delete('/api/notes/:id', function(req, res) {
        const id = req.params.id
        notesData = notesData.filter(note => note.id != id);
        fs.writeFileSync('../db/db.json', JSON.stringify(notesData), function() {
            console.log('Note saved to database')
        })
        res.json(notesData)
    })

    // extra code to clear out the table while working with the functionality

    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = 0;
    //     waitListData.length = 0;

    //     res.json({ ok: true });
    //   });

};