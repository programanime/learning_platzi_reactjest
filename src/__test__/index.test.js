test('test there is not a city', () => {
    expect("random").not.toMatch(/munich/);
})

test('test there is not a city', () => {
    expect(["daniel", "moliuna"]).not.toContain("danielasdf");
})