class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;
    let delimiters = [",", "\n"];
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiters.push(parts[0][2]);
      numbers = parts[1];
    }
    const numArray = numbers.split(new RegExp(`[${delimiters.join("")}]`));
    const negatives = numArray.filter((n) => parseInt(n) < 0);
    if (negatives.length)
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    return numArray.reduce((sum, num) => sum + (parseInt(num) || 0), 0);
  }
}

module.exports = StringCalculator;
