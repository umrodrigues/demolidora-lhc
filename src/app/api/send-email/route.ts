import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/emailService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validação dos dados obrigatórios
    const { name, email, phone, message, service } = body;
    
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Todos os campos são obrigatórios' 
        },
        { status: 400 }
      );
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email inválido' 
        },
        { status: 400 }
      );
    }

    // Envio do email
    const result = await sendEmail({
      name,
      email,
      phone,
      message,
      service
    });

    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email enviado com sucesso!' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || 'Erro ao enviar email' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro na API de envio de email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erro interno do servidor' 
      },
      { status: 500 }
    );
  }
}
