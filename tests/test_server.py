import pytest
from server import app

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

def test_add_numbers_success(client):
    # Test a successful addition
    response = client.post('/api/add', data={'first': '10', 'second': '20'})
    assert response.status_code == 200
    assert response.json['result'] == '30'

def test_subtract_numbers_success(client):
    # Test a successful subtraction
    response = client.post('/api/subtract', data={'first': '10', 'second': '20'})
    assert response.status_code == 200
    assert response.json['result'] == '-10'
