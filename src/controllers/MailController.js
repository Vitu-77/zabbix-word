const Mail = require('../helpers/Mail');

module.exports = {
    async store(req, res) {
        try {
            const { name, email } = req.body;
            console.log({ name, email });
            const mail = Mail.generate(name, email);

            await Mail.send(mail);

            return res.status(200).render('subscription.html');
        } catch (error) {
            return res.status(error.status || 500).json({ error });
        }
    }
}