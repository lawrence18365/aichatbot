import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';

export async function POST(request: NextRequest) {
  try {
    // Get the request body (now expects {messages: Message[]})
    const body = await request.json();
    console.log('Chat proxy: forwarding request with', body.messages?.length || 0, 'messages');
    
    // Forward the request to FastAPI backend
    const response = await fetch(`${BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Authorization': request.headers.get('Authorization') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend chat error:', errorText);
      return NextResponse.json(
        { error: 'Backend chat request failed' }, 
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chat proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' }, 
      { status: 500 }
    );
  }
}
