const Tags = require("./Tags")
// @ponicode
describe("handleTagClick", () => {
    let inst

    beforeEach(() => {
        inst = new Tags.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleTagClick("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleTagClick("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleTagClick("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleTagClick("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleTagClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
