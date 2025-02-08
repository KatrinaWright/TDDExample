from exampleTDD import application

def test_exists():
    assert application("try this") == 2

def test_empty():
    assert application() == 0

def test_long():
    assert application("Mississippi dreams a dream today") == 5

def test_single():
    assert application("Hallelujah!") == 3