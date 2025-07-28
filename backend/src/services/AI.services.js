const { PDFLoader } = require("@langchain/community/document_loaders/fs/pdf");
const { DocxLoader } = require("@langchain/community/document_loaders/fs/docx");
// const { TextLoader } = require("@langchain/community/document_loaders/fs/text");
const { ChatOpenAI } = require("@langchain/openai");
const resumeTemplate = require("./../prompts/resume.prompt");
const { StructuredOutputParser } = require("langchain/output_parsers");
const { z } = require("zod");

class AIService {
  constructor() {
    this.prompt = "";
    this.resumeText = "";
    this.type = "";
    this.path = "";
    this.formattedInstructions = "";
    this.parser = null;
  }
  async extractTextFromFile(file) {
    switch (this.type) {
      case "doc":
      case "docx":
        await this.DOCFile();
        break;
      case "pdf":
        await this.PDFFile();
        break;
      case "txt":
        await this.PlainFile();
        break;
    }
  }

  async createPrompt(jd) {
    console.log("createPrompt");
    console.log(jd);
    this.generateInstructions();
    try {
      const prompt = await resumeTemplate.format({
        resume: this.resumeText,
        jd,
        formattedInstructions: this.formattedInstructions,
      });

      this.prompt = prompt;
      console.log("prompt:", prompt);
    } catch (er) {
      throw er;
    }
  }

  async generateInstructions() {
    const schema = z.object({
      optimized_resume_for_pdf: z.string(),
      optimized_resume_for_display: z.string(),
      ats_score: z.number(),
      suggestions: z.array(z.string()),
    });

    const parser = StructuredOutputParser.fromZodSchema(schema);

    this.formattedInstructions = parser.getFormatInstructions();
    this.parser = parser;
  }

  setDoc = (file) => {
    const type = file.filename.split(".")[1];
    console.log("type:", type);
    this.type = type;
    this.path = file.path;
  };

  async PDFFile() {
    try {
      const loader = new PDFLoader(this.path);
      const document = await loader.load();
      this.resumeText = document.map((doc) => doc.pageContent).join("\n");
      //   console.log(this.resumeText);
    } catch (err) {
      throw err;
    }
  }
  async DOCFile() {
    try {
      const loader = new DocxLoader(this.path);
      const document = await loader.load();
      this.resumeText = document.map((doc) => doc.pageContent).join("\n");
    } catch (err) {
      throw err;
    }
  }
  async PlainFile() {}

  async generateResume() {
    console.log("generate resume");
    console.log("API:", process.env.OPENROUTER_AI_API);
    try {
      const model = new ChatOpenAI({
        temperature: 0.7,
        modelName: "deepseek/deepseek-r1-0528:free",
        streaming: false,
        configuration: {
          baseURL: "https://openrouter.ai/api/v1",
          apiKey: process.env.OPENROUTER_AI_API, // Your OpenRouter key
          defaultHeaders: {
            Authorization: `Bearer ${process.env.OPENROUTER_AI_API}`,
            "HTTP-Referer": "http://localhost:3000", // or your production domain
            "X-Title": "Resume Optimizer",
          },
        },
      });

      const data = await model.invoke([
        {
          role: "system",
          content: this.prompt,
        },
      ]);

      const response = await this.parser.parse(data.content);
      console.log(response);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = AIService;
