// Format bot response text to clean up markdown and other formatting issues
export const formatBotResponse = (text) => {
    if (!text) return '';
    
    let formattedText = text;
  
    // Initial cleanup
    formattedText = formattedText
      // Remove bold/italic markdown while keeping the text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      
      // Convert hyphens to bullet points and add proper spacing
      .replace(/^\s*-\s*(.*?)(?=(?:\n|$))/gm, '\n • $1\n')
      
      // Handle existing bullet points
      .replace(/•\s*(.*?)(?=(?:•|\n|$))/g, '\n • $1\n')
      
      // Fix numbered lists
      .replace(/(\d+)\.\s*(.*?)(?=(?:\d+\.|\n|$))/g, '\n$1. $2\n')
      
      // Format numbers with commas for thousands
      .replace(/\b(\d{4,})\b/g, (match) => {
        return parseInt(match).toLocaleString();
      })
      
      // Ensure proper spacing after punctuation
      .replace(/([.!?])([A-Za-z])/g, '$1 $2')
      
      // Clean up multiple spaces
      .replace(/\s{2,}/g, ' ')
      
      // Format parenthetical content
      .replace(/\(([^)]+)\)/g, '($1)')
      
      // Ensure proper spacing around colons
      .replace(/(\w+):\s*/g, '$1: ')
      
      // Remove any remaining asterisks or hyphens used as bullets
      .replace(/^\s*[\*\-]\s*/gm, '')
      
      // Clean up excessive newlines while maintaining structure
      .replace(/\n{3,}/g, '\n\n')
      
      // Add proper spacing before "Here's" and similar transitions
      .replace(/(\.\s*)([A-Z][^.]+ the breakdown:)/g, '$1\n\n$2\n')
      
      // Clean up spaces at the beginning of lines
      .replace(/^\s+/gm, '')
      
      // Ensure proper spacing around bullet points
      .replace(/\n\s*•/g, '\n•')
      
      // Remove trailing/leading whitespace
      .trim();
  
    // Final cleanup of bullet points and spacing
    formattedText = formattedText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
      .join('\n');
  
    return formattedText;
  };
  
  // Example of expected output:
  /*
  Based on the data, the best post type for high engagement is a video post.
  
  Here's the breakdown:
  
  • Video Post: 21,259 views, 53,419 engagements (likes: 12,161, comments: 2,150, shares: 1,108)
  • Image Post: 10,207 views, 23,419 engagements (likes: 5,398, comments: 1,940, shares: 1,081)
  • Link Post: 5,398 views, 12,161 engagements (likes: 3,767, comments: 747, shares: 354)
  • Text Post: 4,393 views, 10,207 engagements (likes: 1,940, comments: 905, shares: 362)
  
  The video post has the highest engagement rate, with 53,419 engagements and a rate of 41.1% (engagement / views).
  */