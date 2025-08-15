function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
  
    // Start with the first string as a candidate prefix
    let prefix = strs[0];
  
    // For each other string, shrink prefix until it matches
    for (const s of strs.slice(1)) {
      while (!s.startsWith(prefix)) {
        prefix = prefix.slice(0, -1); // remove last char
        if (prefix === "") return "";
      }
    }
  
    return prefix;
  }