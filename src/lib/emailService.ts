import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export async function sendEmail(data: EmailData) {
  try {
    // Configuração do transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviando para o próprio email
      subject: `Nova mensagem de contato - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nova mensagem de contato
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Informações do Cliente</h3>
            <p><strong>Nome:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefone:</strong> ${data.phone}</p>
            ${data.service ? `<p><strong>Serviço de interesse:</strong> ${data.service}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensagem</h3>
            <p style="line-height: 1.6; color: #555;">${data.message}</p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>💬 Responda diretamente pelo WhatsApp:</strong><br>
              <a href="https://wa.me/555199848887?text=Olá! Recebi sua mensagem através do site da Demolidora LHC." 
                 style="color: #25d366; text-decoration: none; font-weight: bold;">
                Clique aqui para conversar no WhatsApp
              </a>
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              Esta mensagem foi enviada através do site da Demolidora LHC
            </p>
          </div>
        </div>
      `,
    };

    // Envio do email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
