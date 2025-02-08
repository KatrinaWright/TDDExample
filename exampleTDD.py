def application(text=""):
    if not text:
        return 0
    
    char_counts = {}
    
    for char in text.lower():
        if char.isalnum():  
            char_counts[char] = char_counts.get(char, 0) + 1
    
    return max(char_counts.values()) if char_counts else 0