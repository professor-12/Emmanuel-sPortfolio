import fs from "fs/promises";

export const getProject = async () => {
    try {
        // Fetching the project data from the Netlify API
        const project = await fetch("https://api.netlify.com/api/v1/sites", {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.API_KEY,
            },
        });

        // Converting the response to JSON
        const projectJson = await project.json();

        // Writing the JSON data to a file after converting it to a string
        await fs.writeFile(
            "./projectData.json",
            JSON.stringify(projectJson, null, 2)
        );

        // Logging the JSON data to the console

        // Returning the JSON data
        return projectJson;
    } catch (error) {
        // Handling errors that might occur during the fetch or file writing process
        console.error("Error fetching project or writing file:", error);
        throw error;
    }
};
