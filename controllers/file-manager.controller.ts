import { Request, Response } from "express";
import path from "node:path";
import fs from "fs";

export const uploadPost = (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const mediaDir = path.join(__dirname, "../media");
    const savedLinks: any[] = [];

    files.forEach((file) => {
      const filename = `${Date.now()}-${file.originalname}`;
      const filePath = path.join(mediaDir, filename);
      fs.writeFileSync(filePath, file.buffer);
      savedLinks.push({
        folder: "/media",
        filename: filename,
        mimetype: file.mimetype,
        size: file.size,
      });
    });

    res.status(200).json({
      code: "success",
      message:
        savedLinks.length > 1
          ? "Upload files thành công!"
          : "Upload file thành công!",
      savedLinks: savedLinks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: "error",
      message: "Upload thất bại!",
    });
  }
};
