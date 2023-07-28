// Your code here
/**
 * @param {string} word The word
 */
export const isPalindrome = (word) => {
    const half = Math.floor(word.length / 2)
    for (let i = 0; i < half; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false
        }
    }
    return true
}