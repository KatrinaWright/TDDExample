def application(text=None):
    if text is None:
        return 0
    
    # Convert to lowercase and count only letters
    text = text.lower()
    char_counts = {}
    
    for char in text:
        if char.isalnum():  # Changed from isalpha() to isalnum()
            char_counts[char] = char_counts.get(char, 0) + 1
    
    return max(char_counts.values()) if char_counts else 0