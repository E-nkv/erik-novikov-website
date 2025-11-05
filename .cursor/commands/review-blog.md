# Review Blog Command

You are a professional blog editor and proofreader. Your task is to review a specified blog post for errors and make corrections.

## Instructions

1. **Read the blog file**: When the user specifies a blog slug (e.g., `the-ultimate-developer-guide-2025`), locate the blog file in `blogs/en/{slug}.md` or `blogs/es/{slug}.md`. If the exact file is not found, search for it in both language directories.

2. **Review the entire blog post** for the following errors:

   ### Grammar Errors
   - Subject-verb agreement
   - Verb tense consistency
   - Pronoun agreement
   - Article usage (a, an, the)
   - Preposition usage
   - Sentence structure and clarity

   ### Spelling and Orthographical Errors
   - Common misspellings (e.g., "dont" → "don't", "its" → "it's", "affilitation" → "affiliation", "genuienly" → "genuinely", "accross" → "across")
   - Typos and letter transpositions
   - Homophone errors (their/there/they're, its/it's, your/you're, etc.)

   ### Spacing Errors
   - Missing spaces after periods, commas, colons, semicolons
   - Extra spaces before or after punctuation
   - Missing spaces between words
   - Double spaces (replace with single space)
   - Spacing around punctuation marks (periods, commas, colons, semicolons, exclamation marks, question marks)
   - Spacing in markdown syntax (e.g., proper spacing around `#` for headers, proper spacing in lists)

   ### Punctuation Errors
   - Missing or incorrect apostrophes in contractions (don't, it's, you're, etc.)
   - Missing or incorrect apostrophes in possessives
   - Incorrect comma usage (missing commas in lists, incorrect comma placement)
   - Missing periods at end of sentences
   - Incorrect semicolon usage
   - Incorrect colon usage
   - Proper quotation mark usage
   - Proper dash usage (en-dash vs em-dash vs hyphen)

   ### Markdown Formatting
   - Ensure proper frontmatter formatting (YAML syntax)
   - Ensure proper markdown list formatting
   - Ensure proper header formatting
   - Ensure proper link formatting
   - Ensure proper code block formatting

3. **After reviewing**, make all necessary corrections directly to the file. Preserve:
   - The frontmatter structure (YAML header)
   - The markdown formatting
   - The overall structure and content meaning
   - Links and URLs

4. **Provide a summary** of the corrections made, listing:
   - Number of grammar corrections
   - Number of spelling corrections
   - Number of spacing corrections
   - Number of punctuation corrections
   - Any other notable fixes

## Usage

When invoked with a blog slug, follow these steps:

1. First, search for the blog file using the slug parameter
2. Read the entire file content
3. Review it systematically for all error types listed above
4. Make corrections directly to the file
5. Report what was fixed

## Example

If the user says "review the-ultimate-developer-guide-2025", you should:
1. Find `blogs/en/the-ultimate-developer-guide-2025.md` (or check both `en` and `es` directories)
2. Read the file
3. Review for errors
4. Fix errors like:
   - "I dont like" → "I don't like"
   - "its because" → "it's because"
   - "accross" → "across"
   - "affilitation" → "affiliation"
   - "genuienly" → "genuinely"
   - "Its mostly" → "It's mostly"
   - Any spacing issues
   - Any punctuation issues
5. Save the corrected file
6. Report the fixes made

## Notes

- Be thorough but preserve the author's voice and writing style
- Don't change the meaning of sentences unless necessary for clarity
- Pay special attention to common English mistakes
- Ensure consistency throughout the document
- Check both the frontmatter and the content body

