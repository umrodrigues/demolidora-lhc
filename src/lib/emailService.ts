import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

function formatPhoneForWhatsApp(phone: string): string {
  let cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.startsWith('55')) {
    return cleaned;
  }
  
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.substring(1);
  }
  
  if (!cleaned.startsWith('55')) {
    cleaned = '55' + cleaned;
  }
  
  return cleaned;
}

function getServiceLabel(service?: string): string {
  if (!service) return '';
  const services: { [key: string]: string } = {
    demolicao: 'Demolição',
    escavacao: 'Escavação',
    terraplenagem: 'Terraplenagem',
    outros: 'Outros'
  };
  return services[service] || service;
}

export async function sendEmail(data: EmailData) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const formattedPhone = formatPhoneForWhatsApp(data.phone);
    const whatsappMessage = encodeURIComponent('Olá! Recebi sua mensagem através do site da Demolidora LHC.');
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${whatsappMessage}`;
    const logoUrl = 'https://www.demolidoralhc.com.br/logo.png';

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: ['demolidoralhc@gmail.com', 'comercial.lhc01@gmail.com'],
      subject: `Nova mensagem de contato - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  
                  <tr>
                    <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; text-align: center;">
                      <img src="${logoUrl}" alt="Demolidora LHC" style="max-width: 300px; height: auto; display: block; margin: 0 auto;" />
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h1 style="color: #1a1a1a; margin: 0 0 10px 0; font-size: 28px; font-weight: bold; border-bottom: 3px solid #D4AF37; padding-bottom: 15px;">
                        Nova Mensagem de Contato
                      </h1>
                      <p style="color: #666; margin: 15px 0 0 0; font-size: 14px;">
                        Você recebeu uma nova solicitação de orçamento através do site.
                      </p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 8px; border-left: 4px solid #D4AF37;">
                        <h2 style="color: #D4AF37; margin: 0 0 20px 0; font-size: 20px; font-weight: bold;">
                          👤 Informações do Cliente
                        </h2>
                        <table cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td style="padding: 8px 0; color: #333; font-weight: 600; width: 140px;">Nome:</td>
                            <td style="padding: 8px 0; color: #555;">${data.name}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #333; font-weight: 600;">Email:</td>
                            <td style="padding: 8px 0; color: #555;">
                              <a href="mailto:${data.email}" style="color: #D4AF37; text-decoration: none;">${data.email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #333; font-weight: 600;">Telefone:</td>
                            <td style="padding: 8px 0; color: #555;">
                              <a href="tel:${data.phone}" style="color: #D4AF37; text-decoration: none;">${data.phone}</a>
                            </td>
                          </tr>
                          ${data.service ? `
                          <tr>
                            <td style="padding: 8px 0; color: #333; font-weight: 600;">Serviço:</td>
                            <td style="padding: 8px 0; color: #555; font-weight: 500;">${getServiceLabel(data.service)}</td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; border-left: 4px solid #1a1a1a;">
                        <h2 style="color: #1a1a1a; margin: 0 0 15px 0; font-size: 20px; font-weight: bold;">
                          💬 Mensagem
                        </h2>
                        <p style="line-height: 1.8; color: #555; margin: 0; white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 0 30px 30px 30px;">
                      <div style="background: linear-gradient(135deg, #25D366 0%, #20BA5A 100%); padding: 25px; border-radius: 8px; text-align: center;">
                        <p style="margin: 0 0 15px 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                          💬 Responda diretamente pelo WhatsApp:
                        </p>
                        <a href="${whatsappUrl}" 
                           target="_blank" 
                           style="display: inline-block; background-color: #ffffff; color: #25D366; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold; font-size: 16px; transition: all 0.3s;">
                          Clique aqui para conversar no WhatsApp
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f8f9fa; border-top: 1px solid #e9ecef; text-align: center;">
                      <p style="margin: 0; color: #999; font-size: 12px;">
                        Esta mensagem foi enviada através do site da <strong style="color: #D4AF37;">Demolidora LHC</strong>
                      </p>
                      <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                        <a href="https://www.demolidoralhc.com.br" style="color: #D4AF37; text-decoration: none;">www.demolidoralhc.com.br</a>
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}
