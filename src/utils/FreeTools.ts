import axios from "axios";

const FreeTools = async (prompt: string) => {
  try {
    const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "").trim().replace(/\/$/, "");
    const response = await axios.post(
      `${baseUrl}/free-tools/freeapi`,
      { prompt },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default FreeTools;
