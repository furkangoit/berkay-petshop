import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    throw new Error("API Anahtarı bulunamadı.");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Sen Berkay Petshop'un dost canlısı ve bilgili yapay zeka asistanısın. 
        Görevin müşterilere evcil hayvan bakımı, beslenme önerileri ve ürün seçimi konusunda yardımcı olmak.
        
        Tonun:
        - Nazik, yardımsever ve hayvan sever.
        - Emoji kullanarak konuşmayı samimi hale getir 🐾 🐶 🐱.
        - Türkçe konuş.

        Bilmen gerekenler:
        - Berkay Petshop her türlü kedi, köpek, kuş ve kemirgen ürününü satar.
        - Ayrıca evcil hayvan kuaförü (traş, banyo) hizmetimiz vardır.
        - Mağazamız haftanın 7 günü 09:00 - 21:00 arası açıktır.
        
        Eğer tıbbi bir soru gelirse, genel bir tavsiye ver ama mutlaka "Bir veteriner hekime danışmanızı öneririm" de.
        `,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Üzgünüm, şu anda bağlantı kuramıyorum. Lütfen sayfayı yenileyip tekrar deneyin.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Bir sorun oluştu, cevap alamadım.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Üzgünüm, şu anda yanıt veremiyorum. Lütfen biraz sonra tekrar deneyin.";
  }
};
