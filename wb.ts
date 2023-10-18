// # Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// # Each letter in magazine can only be used once in ransomNote.

// # Example 1:				
// # Input: ransomNote = "a", magazine = "b"
// # Output: false
// # Example 2:
// # Input: ransomNote = "aa", magazine = "ab"
// # Output: false
// # Example 3:
// # Input: ransomNote = "aa", magazine = "aab"
// # Output: true


function noteChecker(ransomeNote: string, magazine: string): boolean {
    const ransomeNoteArray = ransomeNote.split('')
    const magazineArray = magazine.split('')
    const ransomeNoteObj:{[i:string]:number} = {}
    const magazineObj:{[i:string]:number} = {}
    for(let i = 0; i < ransomeNoteArray.length; i ++){
        if (!(ransomeNoteArray[i] in ransomeNoteObj)){
            ransomeNoteObj[ransomeNoteArray[i]] = 1
        } else {
            ransomeNoteObj[ransomeNoteArray[i]] ++
        }
    }
    for(let i = 0; i < magazineArray.length; i ++){
        if(!(magazineArray[i] in magazineObj)){
            magazineObj[magazineArray[i]] = 1
        } else {
            magazineObj[magazineArray[i]] ++
        }
    }
    for(const letter in ransomeNoteObj){
        if(ransomeNoteObj[letter] <= magazineObj[letter]){
            continue
        } else return false
    }
    return true
}










