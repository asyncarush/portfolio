import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, access, constants } from "fs/promises";
import { join, extname } from "path";
import { v4 as uuidv4 } from 'uuid';

// Helper function to ensure the upload directory exists
async function ensureUploadDir(uploadDir: string) {
  try {
    await access(uploadDir, constants.F_OK);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // Directory doesn't exist, create it
      try {
        await mkdir(uploadDir, { recursive: true });
        console.log(`Created upload directory: ${uploadDir}`);
      } catch (mkdirError) {
        console.error('Error creating upload directory:', mkdirError);
        throw new Error('Could not create upload directory');
      }
    } else {
      console.error('Error accessing upload directory:', error);
      throw new Error('Error accessing upload directory');
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 }
      );
    }

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validImageTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: "Invalid file type. Only images are allowed." },
        { status: 400 }
      );
    }

    // Generate a unique filename to prevent overwrites
    const fileExtension = extname(file.name);
    const uniqueFilename = `${uuidv4()}${fileExtension}`;
    
    // Get the upload directory path
    const uploadDir = join(process.cwd(), 'public', 'blog-images');
    
    // Ensure the upload directory exists
    await ensureUploadDir(uploadDir);
    
    // Read the file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Write the file to the upload directory
    const filePath = join(uploadDir, uniqueFilename);
    await writeFile(filePath, buffer);
    
    // Create a URL that will work in both dev and production
    const baseUrl = process.env.NODE_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL || 'arush-portfolio-omega.vercel.app'}`
      : 'http://localhost:3000';
    
    const imageUrl = `${baseUrl}/blog-images/${uniqueFilename}`;
    
    console.log(`File uploaded successfully: ${filePath}`);
    
    return NextResponse.json({
      success: true,
      url: `/blog-images/${uniqueFilename}`, // Relative URL for the frontend
      fullUrl: imageUrl, // Full URL for reference
      filename: uniqueFilename,
      originalName: file.name,
      size: file.size,
      mimeType: file.type
    });
    
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}
