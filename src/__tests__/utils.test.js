// Your tests here
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
    it ('the function exists', () => {
        expect(isPalindrome).toBeDefined();
    })

    // it('expects one parameter of type string', () => {
    //     expect(isPalindrome).toBeCalledWith(expect.any(String));
    // })

    it('returns true if the string provided is palindrome', () => {
        const word1 = 'racecar';
        const word2 = 'madam';
        const word3 = 'kayak';
        
        expect(isPalindrome(word1)).toBe(true);
        expect(isPalindrome(word2)).toBe(true);
        expect(isPalindrome(word3)).toBe(true);
    })

    it('returns false if the string provided is not palindrome', () => {
        const word1 = 'hello';
        const word2 = 'world';
        const word3 = 'javascript';
        
        expect(isPalindrome(word1)).toBe(false);
        expect(isPalindrome(word2)).toBe(false);
        expect(isPalindrome(word3)).toBe(false);
    })
})