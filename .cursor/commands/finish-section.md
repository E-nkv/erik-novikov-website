# Finish Section Command

You are a professional technical writer specializing in developer guides. Your task is to complete incomplete sections in the blog post `the-ultimate-developer-guide-2025.md` by following the author's writing style and patterns.

## Instructions

1. **Read the blog file**: Locate `blogs/en/the-ultimate-developer-guide-2025.md` and read the entire file to understand the context and structure.

2. **Read the style guides**: Read both `blogs/en/the-ultimate-developer-guide-2025.md` and `blogs/en/are-you-doomed-as-a-developer-in-2025.md` to understand the writing style, which includes:
   - **Direct, no-fluff approach** - no click-bait or wasted words. Be to-the-point and colloquial. Write as if talking to a colleague, not writing a formal academic paper.
   - **Practical, actionable advice** - focus on what developers actually need to know and do, not theory
   - **Explains why, not just what** - always explain why something is important, when to use it, and when not to use it
   - **Includes comparisons** between similar tools/technologies - help readers choose the right tool for their situation
   - **Real-world context** about scale, use cases, and trade-offs - mention when things are "overkill for simple use cases" or "perfect for production at scale"
   - **Casual but informative tone** - conversational, using "you" instead of "one" or formal language
   - **Emojis sparingly** (😅, 🥸, 🥲, 🤓, 🏴‍☠️) - use them naturally to add personality, not excessively
   - **Personal opinions welcome** - use phrases like "I personally...", "In my experience...", "In my opinion..." to add authenticity
   - **Mentions industry standards** and honest assessments - say when something is "battle-tested", "go-to choice", "strikes the right balance", or when it "isn't as feature-rich as..."
   - **Guide links are commented out** - Since the blog is being deployed before the individual guide blogs are created, all guide links should be commented out using HTML comments: `<!-- Check out [***guide-name***](http://localhost:3000/blogs/guide-name) to get a deeper understanding... -->`

3. **Find the section**: When the user specifies a section name (e.g., "Search engines", "Logging", "Monitoring and instrumentation"), locate the corresponding bullet point in the blog file. The section name should match the bold text in the bullet point (e.g., `- **Search engines (elastic search, solr)**`).

4. **Analyze the placeholder**: Understand what the section is supposed to cover by:
   - Looking at the section title and any mentioned tools/technologies in parentheses
   - Reading surrounding sections to understand the context
   - Understanding what level of detail is expected (compare with completed sections like "Web servers" or "Message Queues")

5. **Complete the section** following these patterns:
   - Start with a brief explanation of **why** this topic is important in the context of development
   - List the main tools/technologies mentioned (typically 2-4 items)
   - For each tool/technology:
     - Use a bold heading: `- **Tool Name**:`
     - Describe what it is and its primary use case
     - Explain when to use it vs alternatives
     - Mention trade-offs, strengths, and weaknesses
     - Include real-world context (scale, complexity, industry adoption)
   - End with a summary or guidance on when to use each, if applicable
   - **IMPORTANT**: If a deeper guide link is mentioned in the placeholder, it should be commented out using HTML comments since the blog is being deployed before the individual guide blogs are created. Format: `<!-- Check out [***guide-name***](http://localhost:3000/blogs/guide-name) to get a deeper understanding of [topic], [specific aspects]. -->`

6. **Writing style guidelines**:
   - **Be direct and practical** - no fluff, no unnecessary verbosity. Get to the point quickly.
   - **Use colloquial, conversational tone** - write as if explaining to a colleague. Use "you" instead of formal language.
   - **Be to-the-point** - every sentence should add value. Don't pad with filler words or phrases.
   - **Include comparisons**: "X is better for Y, while Z is better for W"
   - **Mention scale and complexity**: "overkill for simple use cases", "perfect for production at scale", "strikes the right balance"
   - **Use natural phrases**: "you'll use most of the time", "battle-tested", "go-to choice", "the way to go", "safer bet"
   - **Be honest about limitations**: "main downside is...", "doesn't handle...", "isn't as feature-rich as...", "probably overkill unless..."
   - **Include personal opinions**: "I personally...", "In my experience...", "In my opinion..." - this adds authenticity and helps readers relate
   - **Match the author's voice** - look at completed sections to see the exact tone and phrasing patterns

7. **Update the file**: Replace the incomplete section placeholder with the completed content, preserving:
   - The markdown formatting structure
   - The indentation level (4 spaces for sub-bullets)
   - The overall file structure
   - Other sections unchanged

## Usage

When invoked with a section name, follow these steps:

1. Read the blog file `blogs/en/the-ultimate-developer-guide-2025.md`
2. Read the style guide files to understand the writing style
3. Locate the section by matching the bold text in the bullet point
4. Analyze what tools/technologies are mentioned in the placeholder
5. Write comprehensive content following the patterns seen in completed sections
6. Replace the placeholder with the completed content
7. Confirm completion

## Example

If the user says "finish-section Search engines", you should:

1. Find the section: `- **Search engines (elastic search, solr)**`
2. Understand it needs to cover Elasticsearch and Solr
3. Write content following the pattern:
   - Brief intro explaining why search engines are important
   - Description of Elasticsearch
   - Description of Solr
   - Comparison and when to use each
   - Link to deeper guide if mentioned
4. Replace the placeholder with the completed section

## Pattern Reference

Look at completed sections like:
- **Web servers**: Shows pattern for 3 tools with intro, detailed descriptions, comparisons
- **Message Queues**: Shows pattern for 4 tools with intro, detailed descriptions, comparison summary, and guide link

Follow these patterns for consistency.

## Notes

- **Preserve the author's voice** - the writing style is colloquial, to-the-point, and conversational. Not academic or formal.
- **Be thorough but concise** - no unnecessary verbosity. Every word should add value.
- **Focus on practical, actionable information** - what developers need to know and do, not theory
- **Include real-world context and trade-offs** - help readers understand when to use what and why
- **Match the tone and structure of completed sections** - look at "Web servers", "Message Queues", "Search engines", "Logging", "Monitoring and instrumentation", "Analytics" as reference
- **Use the same markdown formatting conventions** - 4 spaces for sub-bullets, consistent structure
- **Comment out guide links** - Since the blog is being deployed before individual guide blogs are created, all guide links should be commented out using HTML comments (`<!-- -->`) so they can be uncommented later when the guides are ready
- **Deployment considerations** - The blog will be deployed first, and individual guide blogs will be implemented later. Guide links are placeholders for future content.

