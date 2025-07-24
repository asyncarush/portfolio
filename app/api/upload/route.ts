import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, error: "No file found" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = join(process.cwd(), "public", "blog-images");

  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error: any) {
    if (error.code !== "EEXIST") {
      console.error("Error creating directory:", error);
      return NextResponse.json({
        success: false,
        error: "Could not create upload directory",
      });
    }
  }

  const path = join(uploadDir, file.name);
  await writeFile(path, buffer);
  console.log(`open ${path} to see the uploaded file`);

  const imageUrl = `/blog-images/${file.name}`;

  return NextResponse.json({ success: true, url: imageUrl });
}
