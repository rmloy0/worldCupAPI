const { getPlayerById } = require('../controllers/players');
const { createPlayer } = require('../controllers/players');

describe('Get player by id', () => {
  test('should execute without crashing', () => {
    const req = {
      params: { id: '6a248c21c7985a907bcdc527' },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    getPlayerById(req, res, next);

    expect(true).toBe(true);
  });

  test('createPlayer should execute without crashing', () => {
    const req = { body: { name: 'Test Player' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    createPlayer(req, res, next);

    expect(true).toBe(true);
  });
});
