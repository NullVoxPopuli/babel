import { parse } from "../lib/index.js";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("template-tag", function () {
  it("should parse exrpession form", function () {
    expect(getParser(`const X = <template>hi</template>`)()).toMatchSnapshot();
  });
});
