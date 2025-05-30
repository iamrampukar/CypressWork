const { defineConfig } = require("cypress");
const { Client } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
            on("task", {
                async connectDB(query) {
                    const client = new Client({
                        user: process.env.DB_USER,
                        host: process.env.DB_HOST,
                        database: process.env.DB_NAME,
                        password: process.env.DB_PASSWORD,
                        port: process.env.DB_PORT,
                    });
                    await client.connect(); // Establish connection to the database
                    const res = await client.query(query); // Execute the query
                    await client.end(); // Close the connection
                    return res.rows; // Return the result rows
                }
            })
        },
    },
});
