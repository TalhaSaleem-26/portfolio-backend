export const HandleContactForm = async (req, res) => {
    console.log("Request body:", req.body); 
    try {
        const { name, email, message } = req.body;

        const userData = await contact.create({ name, email, message });

        try {
            await sendContactMail(name, email, message);
        } catch (error) {
            console.error("Email sending error:", error);
            
        }

        res.status(200).json({ message: "Your response has been successfully sent" });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: "Server error, try again later" });
    }
};
