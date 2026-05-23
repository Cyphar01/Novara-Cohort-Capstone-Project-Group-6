export async function handler(event) {
  try {
    const body = JSON.parse(event.body);

    const response = await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // get raw response first
    const text = await response.text();

    console.log("API RESPONSE:", text);

    return {
      statusCode: response.status,
      body: JSON.stringify({
        success: true,
        data: text,
      }),
    };
  } catch (error) {
    console.error("NETLIFY FUNCTION ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
}