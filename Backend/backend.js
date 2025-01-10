import express from "express";
import cors from "cors"; 

const app = express();
const PORT = 3000;

// Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Endpoint to handle Langflow API request
app.post("/run-flow", async (req, res) => {
    const fetch = (await import("node-fetch")).default; // Dynamically import node-fetch
    const { inputValue } = req.body;

    const flowIdOrName = "d15dac27-2fab-484c-b455-aa8c465374ce";
    const langflowId = "745ec371-b319-42b9-984f-0e30fd586c1e";
    const applicationToken = process.env.ASTRA_APPLICATION_TOKEN || "AstraCS:cUeeKUCzSUafFbQxNzzprILG:afa172d312be2de8d36c55dc0a89fcdf0c94105ba0f32d39d4e119c91c092676";
    const baseURL = "https://api.langflow.astra.datastax.com";

    const tweaks = {
        "ChatInput-hhLJ6": {},
        "Agent-OuJKa": {},
        "Prompt-RAQCt": {},
        "AstraDBToolComponent-zKc4N": {},
        "ChatOutput-vvJh3": {},
    };

    try {
        const response = await fetch(`${baseURL}/lf/${langflowId}/api/v1/run/${flowIdOrName}?stream=false`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${applicationToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                input_value: inputValue,
                input_type: "chat",
                output_type: "chat",
                tweaks: tweaks,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json(data);
        }

        return res.json(data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
