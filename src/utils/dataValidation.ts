export function validateVID(input: string) {
  // Define the regex pattern to match the criteria
  const pattern = /^V\d{8}$/;

  // Test the input string against the pattern
  return pattern.test(input);
}
