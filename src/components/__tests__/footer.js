import React from "react"
import renderer from "react-test-renderer"
import Footer from "../footer"

describe("Footer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer siteTitle="Site Footer" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})