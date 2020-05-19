const nodeMailer = require('nodemailer');

module.exports = {
    generate(name, email) {
        const mail = `
            <div style="font-family: sans-serif;">
                <h3>Olá!</h3>
                <h4>Zabbix World possui uma nova inscrição!</h4>
                <h4 style="font-size: 15px">Abaixo seguem as credenciais do assinante:</h4>
                <div>
                    <div>
                        <span style="margin-right: 4px">Nome: </span><strong>${name}</strong>
                    </div>
                    <br />
                    <div>
                        <span style="margin-right: 4px">Email: </span><strong>${email}</strong>
                    </div>
                </div>
            </div>
        `;

        return mail;
    },

    async send(mail) {
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_RECEIVER,
            subject: `[Newsletter] Zabbix World possui uma nova inscrição!`,
            html: mail
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error.message);
            }
        });
    }
}