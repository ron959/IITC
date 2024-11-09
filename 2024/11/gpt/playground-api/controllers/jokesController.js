const Joke = require('../models/Joke');

exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.status(200).json(jokes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jokes", error });
    }
};

exports.createJoke = async (req, res) => {
    try {
        const joke = new Joke(req.body);
        await joke.save();
        res.status(201).json(joke);
    } catch (error) {
        res.status(400).json({ message: "Error creating joke", error });
    }
};

exports.updateJoke = async (req, res) => {
    try {
        const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!joke) return res.status(404).json({ message: "Joke not found" });
        res.status(200).json(joke);
    } catch (error) {
        res.status(400).json({ message: "Error updating joke", error });
    }
};

exports.deleteJoke = async (req, res) => {
    try {
        const joke = await Joke.findByIdAndDelete(req.params.id);
        if (!joke) return res.status(404).json({ message: "Joke not found" });
        res.status(200).json({ message: "Joke deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting joke", error });
    }
};
