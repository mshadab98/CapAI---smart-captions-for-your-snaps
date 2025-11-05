const{ GoogleGenAI } = require ("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:"AIzaSyDs2agE9urlxQM3G914NJ5si1-PTFP-8Bc"
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();

async function generateCaption(base64ImageFile){

const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config: {
  systemInstruction: `
You are a professional social media caption writer.
Generate ONE high-quality caption for the provided image.

Rules for the caption:
1. Length: 1 short line (max 10-20 words)
2. Must include:
   - 1-4 emojis (related to the image)
   - 1-5 trending hashtags (relevant, not random)
3. Tone: Engaging, modern, social-media friendly
4. Caption must match:
   - Emotion
   - Object / Scene
   - Context of the image
5. Do NOT:
   - Repeat words
   - Use generic captions ("Awesome", "So cool", etc.)
   - Add explanations or extra text

Output ONLY the caption. No extra sentences.
`,
}

});
return response.text;
}

module.exports = generateCaption