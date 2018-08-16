describe('Space', () => {
  describe("prototype", () => {
    var space;

    beforeEach(() => {
      space = new Space()
    })

    it("add() says 'Welcome to Space'", () => {
      expect(space.add()).toEqual("Welcome to Space")
    })
  })
})
