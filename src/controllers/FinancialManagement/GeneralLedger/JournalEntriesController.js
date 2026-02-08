const JournalEntriesService = require('../../../services/FinancialManagement/GeneralLedger/JournalEntriesService');

class JournalEntriesController {
    async postEntry(req, res) {
        try {
            const { entryId } = req.body;
            if (!entryId) return res.status(400).json({ message: "Entry ID required" });

            const result = await JournalEntriesService.postEntry(entryId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in JournalEntriesController.postEntry:", error);
            res.status(500).json({ message: error.message || "Internal Server Error" });
        }
    }

    async reverseEntry(req, res) {
        try {
            const { entryId } = req.body;
            if (!entryId) return res.status(400).json({ message: "Entry ID required" });

            const result = await JournalEntriesService.reverseEntry(entryId, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in JournalEntriesController.reverseEntry:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }

    async approveEntry(req, res) {
        try {
            const { entryId } = req.body;
            if (!entryId) return res.status(400).json({ message: "Entry ID required" });

            const result = await JournalEntriesService.approveEntry(entryId, req.user.id, req.user.organization_id);
            res.json(result);
        } catch (error) {
            console.error("Error in JournalEntriesController.approveEntry:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new JournalEntriesController();
