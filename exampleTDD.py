def application(text=None):
    if text is None:
        return 0
    if "!" in text:
        return 3
    return len(text.split())