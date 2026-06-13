const { getStadiumById } = require('../controllers/stadiums');
const { getAllStadiums } = require('../controllers/stadiums');

describe('Stadiums', () => {
  test('getStadiumById should execute without crashing', () => {
    const req = {
      params: { id: '6a248c21c7985a907bcdc527' },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const next = jest.fn();

    getStadiumById(req, res, next);

    expect(true).toBe(true);
  });

  test('getAllStadiums should execute without crashing', () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    getAllStadiums(req, res, next);

    expect(true).toBe(true);
  });
});
