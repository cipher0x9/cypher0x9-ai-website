import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content
      })),
      system: 'You are Cypher0x9 AI Agent - an expert in Web3, blockchain, AI, and technology. Be helpful, knowledgeable, and professional.',
    });

    const content = response.content[0];
    const message = content.type === 'text' ? content.text : 'Error processing response';

    return NextResponse.json({ message });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Sorry, I encountered an error. Please try again!' }, { status: 500 });
  }
}
