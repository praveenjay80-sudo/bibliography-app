import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, count = 10 } = body;

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `Generate a comprehensive bibliography of ${count} authoritative academic references (books, journal articles, and seminal papers) for the topic "${topic}". 

Format each reference in APA style. Include:
1. Classic/foundational works
2. Modern textbooks and handbooks
3. Key journal articles
4. Recent developments (last 5-10 years)

Return ONLY the numbered bibliography list, one reference per line, starting each with a number like "1. ", "2. ", etc.`;

    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://bibliography-generator.vercel.app',
        'X-Title': 'Bibliography Generator',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an expert academic bibliographer. Generate comprehensive, accurate academic bibliographies for formal science topics. Use real, verifiable references from established academic sources. Format in proper APA style.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return NextResponse.json(
        { error: errorData?.error?.message || 'Failed to generate bibliography' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const bibliography = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({
      topic,
      bibliography,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Bibliography generation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}