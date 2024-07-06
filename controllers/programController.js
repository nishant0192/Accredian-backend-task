const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createProgram = async (req, res) => {
  try {
    const { program, referrerBonus, refereeBonus, enrolled } = req.body;
    const newProgram = await prisma.program.create({
      data: { program, referrerBonus, refereeBonus, enrolled },
    });
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ error: "Failed to create program" });
  }
};

exports.getPrograms = async (req, res) => {
  try {
    const programs = await prisma.program.findMany();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve programs" });
  }
};

exports.getProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const program = await prisma.program.findUnique({
      where: { id: parseInt(id) },
    });
    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }
    res.status(200).json(program);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve program" });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const { program, referrerBonus, refereeBonus, enrolled } = req.body;
    const updatedProgram = await prisma.program.update({
      where: { id: parseInt(id) },
      data: { program, referrerBonus, refereeBonus, enrolled },
    });
    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(500).json({ error: "Failed to update program" });
  }
};

exports.deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.program.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).json({ message: "Program deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete program" });
  }
};
