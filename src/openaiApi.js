import axios from "axios";

const OPENAI_API_KEY =
  "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";
const BASE_URL = "https://api.openai.com/v1/";

export const fetchOpenAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      `${BASE_URL}completions`,
      {
        model: "text-davinci-003", // Choose the model you want
        prompt: prompt, // Your input
        max_tokens: 100, // Limit the response length
        temperature: 0.5, // Creativity level
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching data from OpenAI API:", error);
    throw error;
  }
};
