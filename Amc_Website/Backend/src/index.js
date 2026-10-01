import { prisma } from "./lib/prisma";
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/teamRegister", async (req, res) => {
    try {
        const { leader, leaderemail, leaderRollNum, leaderDept, num, teamName, mate1Name, mate1RollNum, mate1Dept, mate2Name, mate2RollNum, mate2Dept, mate3Name, mate3RollNum, mate3Dept, mate4Name, mate4RollNum, mate4Dept, TransactionId, } = req.body;
        if (!TransactionId || !leader || !teamName || !leaderRollNum || !leaderemail || !leaderDept || !num) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const mates = [
            {
                name: mate1Name,
                rollNum: mate1RollNum,
                dept: mate1Dept
            },
            {
                name: mate2Name,
                rollNum: mate2RollNum,
                dept: mate2Dept
            }, {
                name: mate3Name,
                rollNum: mate3RollNum,
                dept: mate3Dept
            }, {
                name: mate4Name,
                rollNum: mate4RollNum,
                dept: mate4Dept
            }
        ].filter(m => m.name && m.dept && m.rollNum);
        const existingTeam = await prisma.team.findFirst({
            where: {
                OR: [
                    { teamName: teamName },
                    { email: leaderemail },
                    { TransactionId: TransactionId }
                ]
            }
        });
        if (existingTeam) {
            return res.status(409).json({ message: "Team, email, or transaction already exists" });
        }
        const teamInfo = {
            teamName: teamName,
            leaderName: leader,
            email: leaderemail,
            rollNum: leaderRollNum,
            depart: leaderDept,
            num: num,
            TransactionId: TransactionId
        };
        mates.forEach((mates, index) => {
            teamInfo[`mate${index + 1}Name`] = mates.name;
            teamInfo[`mate${index + 1}rollNum`] = mates.rollNum;
            teamInfo[`mate${index + 1}Dept`] = mates.dept;
        });
        const response = await prisma.team.create({
            data: teamInfo
        });
        return res.status(200).json({
            message: "Team registered successfully"
        });
    }
    catch (error) {
        console.error("Error registering team:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map