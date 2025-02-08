def application(text=None):
    if text is None:
        return 0
    
    # Convert to lowercase and count only letters
    text = text.lower()
    letter_counts = {}
    
    for char in text:
        if char.isalpha():
            letter_counts[char] = letter_counts.get(char, 0) + 1
    
    return max(letter_counts.values()) if letter_counts else 0