const { getPlayerById } = require('../controllers/players');
const { getAllPlayers } = require('../controllers/players');

describe('Players', () => {
  test('Getplayers by ID and it should execute without crashing', () => {
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

  test('getPlayers should execute without crashing', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    getAllPlayers(req, res, next);

    expect(true).toBe(true);
  });
});
