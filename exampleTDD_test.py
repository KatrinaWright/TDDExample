from exampleTDD import application

def test_exists():
    assert application("try this") == 2

def test_empty():
    assert application() == 0