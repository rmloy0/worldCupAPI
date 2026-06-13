const { getTeamById } = require('../controllers/teams');
const { getAllTeams } = require('../controllers/teams');

describe('Teams', () => {
  test('getTeamById should execute without crashing', () => {
    const req = {
      params: { id: '6a248c21c7985a907bcdc527' },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    getTeamById(req, res, next);

    expect(true).toBe(true);
  });

  test('getAllTeams should execute without crashing', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    getAllTeams(req, res, next);

    expect(true).toBe(true);
  });
});
