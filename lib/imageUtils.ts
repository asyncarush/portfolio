/**
 * Utility functions for handling image paths in both development and production
 */

/**
 * Get the base URL for image assets
 * Returns the full URL in production or localhost in development
 */
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Browser should use relative URL
    return '';
  }
  
  // For server-side requests, use the Vercel URL or fallback to localhost
  if (process.env.NODE_ENV === 'production') {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL || 'arush-portfolio-omega.vercel.app'}`;
  }
  
  // For development
  return 'http://localhost:3000';
}

/**
 * Processes image URLs in HTML content to ensure they're properly formatted
 * This handles both relative and absolute paths
 */
export function processImageUrls(htmlContent: string): string {
  if (!htmlContent) return htmlContent;
  
  // This regex finds all img tags and processes their src attributes
  return htmlContent.replace(/<img[^>]+src=["']([^"']+)["']/gi, (match, src) => {
    // Skip if the URL is already absolute or a data URL
    if (src.startsWith('http') || src.startsWith('//') || src.startsWith('data:')) {
      return match;
    }
    
    // Ensure the path starts with a slash
    let processedSrc = src.startsWith('/') ? src : `/${src}`;
    
    // Ensure the path includes the blog-images directory if it's a local image
    if (!processedSrc.includes('/blog-images/') && !processedSrc.startsWith('http')) {
      processedSrc = `/blog-images${processedSrc}`;
    }
    
    // Replace the src with the processed path
    return match.replace(src, processedSrc);
  });
}

/**
 * Gets the full URL for an image path
 * Handles both relative and absolute paths
 */
export function getFullImageUrl(path: string): string {
  if (!path) return '';
  
  // If it's already a full URL, return as is
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // For server-side rendering, use the full URL
  if (typeof window === 'undefined') {
    const baseUrl = getBaseUrl();
    return `${baseUrl}${normalizedPath}`;
  }
  
  // For client-side, use relative URL
  return normalizedPath;
}
