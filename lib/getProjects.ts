export const getProject = async () => {
      const project = await fetch("https://api.netlify.com/api/v1/sites", {
            headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + process.env.API_KEY
            }
      })

      return await project.json()

}