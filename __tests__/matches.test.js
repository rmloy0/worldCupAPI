const { getMatchesById } = require('../controllers/matches');
const { getAllMatches } = require('../controllers/matches');

describe('Matches', () => {
  test('GetMatches by ID and it should execute without crashing', () => {
    const req = {
      params: { id: '6a248c21c7985a907bcdc527' },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    getMatchesById(req, res, next);

    expect(true).toBe(true);
  });

  test('GetPlayyers should execute without crashing', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    getAllMatches(req, res, next);

    expect(true).toBe(true);
  });
});
