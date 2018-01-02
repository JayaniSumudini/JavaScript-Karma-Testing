/**
 * Created by JSumudini on 1/2/2018.
 */
describe("test calculator", function () {
    it("test add function", function () {
        expect(add(2,3)).toBe(5);
        expect(true).not.toBe(false);
    });
    it("test subtract function" , function () {
        expect(subtract(4,5)).toBe(-1);
        expect(subtract(-10,-9)).toBe(-1);
    })
});