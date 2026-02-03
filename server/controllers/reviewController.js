const Review = require('../models/Review');

// 1. CREATE: Naya Review Save karna (User Form se)
exports.createReview = async (req, res) => {
    
    // --- DEBUG LOG START ---
    console.log("🔥 Request Received at /api/reviews (POST)");
    console.log("📦 Data Body:", req.body);
    // --- DEBUG LOG END ---

    try {
        const newReview = new Review(req.body);
        const savedReview = await newReview.save();
        
        console.log("✅ Successfully Saved to Database:", savedReview);
        res.status(200).json(savedReview);
    } catch (err) {
        console.error("❌ Error Saving Review:", err);
        res.status(500).json(err);
    }
};

// 2. READ (Public): Sirf Approved Reviews lana (Website Slider ke liye)
exports.getPublicReviews = async (req, res) => {
    try {
        // Sirf wo layen jinka status 'Approved' ho, aur naye pehle ayen
        const reviews = await Review.find({ status: 'Approved' }).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
};

// 3. READ (Admin): Saare Reviews lana (Pending, Rejected sab)
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        
        // --- DEBUG LOG ---
        console.log(`📋 Admin fetched ${reviews.length} reviews.`);
        
        res.status(200).json(reviews);
    } catch (err) {
        console.error("❌ Error fetching all reviews:", err);
        res.status(500).json(err);
    }
};

// 4. UPDATE: Status Change karna (Approve/Reject)
exports.updateReviewStatus = async (req, res) => {
    console.log(`🔄 Updating Status for ID: ${req.params.id} to ${req.body.status}`);

    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // Body mein { status: "Approved" } aayega
            { new: true }
        );
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(500).json(err);
    }
};

// 5. DELETE: Review Delete karna
exports.deleteReview = async (req, res) => {
    console.log(`🗑️ Deleting Review ID: ${req.params.id}`);

    try {
        await Review.findByIdAndDelete(req.params.id);
        res.status(200).json("Review has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
};